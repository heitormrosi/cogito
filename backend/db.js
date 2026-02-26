import Knex from "knex";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const db = Knex({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: "cogito"
    }
});

export default db;