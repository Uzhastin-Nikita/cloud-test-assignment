import { configs } from "../entities/config";
import { dbConnection } from "../database/connection";
import router from "express";

const configRoutes = router();

configRoutes.get("/api", async (req, res) => {
  const connection = await dbConnection();
  const configRepository = connection.getRepository(configs);
  const config = await configRepository.find();
  res.send(config);
});

configRoutes.post("/api", async (req, res) => {
    const connection = await dbConnection();
    const configRepository = connection.getRepository(configs);
    const config = await configRepository.save(req.body);
    res.send(config);
});

configRoutes.put("/api/:id", async (req, res) => {
    const connection = await dbConnection();
    const configRepository = connection.getRepository(configs);
    const config = await configRepository.update(req.params.id, req.body);
    res.send(config);
});

configRoutes.delete("/api/:id", async (req, res) => {
    const connection = await dbConnection();
    const configRepository = connection.getRepository(configs);
    const config = await configRepository.delete(req.params.id);
    res.send(config);
});

export default configRoutes;
