import { configs } from "../entities/config";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [ configs ],
});

dbConnection.initialize()
.then( async () => {
    console.log("Database connected");
}
).catch((err)  => console.log(`${err}`));

export default dbConnection;
