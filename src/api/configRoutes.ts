import { configs } from "../entities/config";
import { dbConnection } from "../database/connection";
import router from "express";

const configRoutes = router();

const configRepository = dbConnection.getRepository(configs);

configRoutes.get("/config", async (req, res) => {
  const config = await configRepository.find();
  res.send(config);
});

configRoutes.post("/config", async (req, res) => {
    const config = await configRepository.create(req.body);
    res.send(config);
});

configRoutes.get("/config/:id", async (req, res) => {
    const config = await configRepository.findOneBy({id: parseInt(req.params.id, 10)});
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
