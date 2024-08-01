import { CreateCashflowRequestDTO } from "./cashflow.dto.js";

export class CashflowController {
    /**
     * @param {import("express").Express} app
     * @param {import("./cashflow.service").CashflowService} cashflowService
     */
    constructor(app, cashflowService) {
        app.post("/cashflow", async (req, res) => {
            const createCashflowDTO = CreateCashflowRequestDTO.from(req.body.cashflow);
            const cashflowDTO = await cashflowService.createCashflow(createCashflowDTO);
            res.status(201).send({
                data: cashflowDTO,
            });
        });
        app.get("/cashflow", async (req, res) => {
            const year = Number(req.query.year);
            const month = Number(req.query.month);
            const cashflowDTOList = await cashflowService.getCashflowList(year, month);
            res.status(200).send({
                data: cashflowDTOList,
            });
        });
    }
}
