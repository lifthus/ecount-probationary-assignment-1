import { Cashflow } from "../domain/cashflow.entity.js";

export class CashflowRepository {
    /**
     *
     * @param {import("pg").Client} client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     *
     * @param {import("../domain/cashflow.entity").Cashflow} cashflow
     * @returns
     */
    async createCashflow(cashflow) {
        if (cashflow.id) return cashflow;
        await this.client.query("INSERT INTO cashflow (date, asset_type, classification, content, price) VALUES ($1, $2, $3, $4, $5)", [
            cashflow.date,
            cashflow.assetType,
            cashflow.classification,
            cashflow.content,
            cashflow.price,
        ]);
        return cashflow;
    }

    async getCashflowList(year, month) {
        return (
            await this.client.query("SELECT * FROM cashflow WHERE EXTRACT(YEAR FROM date) = $1 AND EXTRACT(MONTH FROM date) = $2", [year, month])
        ).rows.map((row) => {
            return new Cashflow(row.id, row.date, row.asset_type, row.classification, row.content, row.price);
        });
    }
}
