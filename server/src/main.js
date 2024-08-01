import express from "express";
import dotenv from "dotenv";
dotenv.config(); // in commonjs
import { initDb } from "./db/db.js";
import { AppModule } from "./modules/app.module.js";

async function boot() {
    const app = express();
    app.use(express.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    const client = await initDb();
    new AppModule(app, client);
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`listening on port ${process.env.SERVER_PORT}`);
    });
}
boot();
