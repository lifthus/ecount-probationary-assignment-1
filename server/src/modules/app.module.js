import { CashflowModule } from "./cashflow/cashflow.module.js";

export class AppModule {
    /**
     *
     * @param {import("express").Express} app
     * @param {import("pg").Client} client
     */
    constructor(app, client) {
        new CashflowModule(app, client);
    }
}
