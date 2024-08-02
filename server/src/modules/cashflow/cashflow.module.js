import { CashflowRepository } from "../repository/cashflow.repository.js";
import { CashflowController } from "./cashflow.controller.js";
import { CashflowService } from "./cashflow.service.js";

export class CashflowModule {
    /**
     *
     * @param {import("express").Express} app
     * @param {import("pg").Client} client
     */
    constructor(app, client) {
        const cashflowRepository = new CashflowRepository(client);
        const cashflowService = new CashflowService(cashflowRepository);
        new CashflowController(app, cashflowService);
    }
}
