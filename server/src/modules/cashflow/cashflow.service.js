import { CashflowResponseDTO } from "./cashflow.dto.js";

export class CashflowService {
    /**
     *
     * @param {import("../repository/cashflow.repository").CashflowRepository} cashflowRepository
     */
    constructor(cashflowRepository) {
        this.cashflowRepository = cashflowRepository;
    }

    /**
     *
     * @param {import("./cashflow.dto").CreateCashflowRequestDTO} dto
     * @returns
     */
    async createCashflow(dto) {
        const newCashflow = dto.toEntity();
        const cashflow = await this.cashflowRepository.createCashflow(newCashflow);
        return CashflowResponseDTO.from(cashflow);
    }

    async getCashflowList(year, month) {
        const cashflowList = await this.cashflowRepository.getCashflowList(year, month);
        return cashflowList.map((cashflow) => CashflowResponseDTO.from(cashflow));
    }
}
