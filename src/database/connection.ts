import { configs } from "../entities/config";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
    const connection = await createConnection({
        type: "postgres",
        host: process.env.PGHOST,
        port: 5432,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        entities: [configs],
    });
    return connection;
}

