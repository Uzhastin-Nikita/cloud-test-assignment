import { Configs } from "src/entities/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [ Configs ],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize().then(() => {
    console.log("Database connection initialized");
}).catch((err: any) => {
    console.log(err);
});

