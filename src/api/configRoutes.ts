import { configs } from "../entities/config";
import { dbConnection } from "../database/connection";
import router from "express";
import bodyParser from "body-parser";

const configRoutes = router();

const configRepository = dbConnection.getRepository(configs);
const urlencodedParser = bodyParser.urlencoded({ extended: false });

configRoutes.get("/config", async (req, res) => {
  const config = await configRepository.find();
  res.send(config);
});

configRoutes.post("/config", urlencodedParser, async (req, res) => {
  try {
    const config = new configs();
    config.service = "service-k8s";
    config.jsondata = req.body;
    configRepository.save(config);
    res.send(config);
  } catch (error) {
    console.log(error);
  }
});

configRoutes.get("/config/:id", async (req, res) => {
  const config = await configRepository.findOneBy({
    id: parseInt(req.params.id, 10),
  });
  res.send(config);
});

configRoutes.put("/config/:id", async (req, res) => {
  const config = await configRepository.update(req.params.id, req.body);
  res.send(config);
});

configRoutes.delete("/config/:id", async (req, res) => {
  const config = await configRepository.delete(req.params.id);
  res.send(config);
});

export default configRoutes;
