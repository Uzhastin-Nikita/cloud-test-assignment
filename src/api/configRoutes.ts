import { configs } from "../entities/config";
import { dbConnection } from "../database/connection";
import router from "express";

const configRoutes = router();

const configRepository = dbConnection.getRepository(configs);

configRoutes.get("/api", async (req, res) => {
  const config = await configRepository.find();
  res.send(config);
});

configRoutes.get("api/:id", async (req, res) => {
    const config = await configRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
    res.send(config);
});

configRoutes.post("/api", async (req, res) => {
    const config = configRepository.create(req.body);
    res.send(config);
});

configRoutes.put("/api/:id", async (req, res) => {
    const config = await configRepository.update(req.params.id, req.body);
    res.send(config);
});

configRoutes.delete("/api/:id", async (req, res) => {
    const config = await configRepository.delete(req.params.id);
    res.send(config);
});

export default configRoutes;
