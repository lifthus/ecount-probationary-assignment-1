import { Cashflow } from "../domain/cashflow.entity.js";

export class CreateCashflowRequestDTO {
    /**
     * @type {Date}
     */
    date;
    /**
     * @type {string}
     */
    assetType;
    /**
     * @type {string}
     */
    classification;
    /**
     * @type {string}
     */
    content;
    /**
     * @type {string}
     */
    price;

    static from(request) {
        const dto = new CreateCashflowRequestDTO();
        dto.date = new Date(request.date);
        dto.assetType = request.assetType;
        dto.classification = request.classification;
        dto.content = request.content;
        dto.price = request.price;
        return dto;
    }

    toEntity() {
        return new Cashflow(undefined, this.date, this.assetType, this.classification, this.content, this.price);
    }
}

export class CashflowResponseDTO {
    /**
     * @type {number}
     */
    id;
    /**
     * @type {Date}
     */
    date;
    /**
     * @type {string}
     */
    asset_type;
    /**
     * @type {string}
     */
    classification;
    /**
     * @type {string}
     */
    content;
    /**
     * @type {number}
     */
    price;

    /**
     *
     * @param {import("../domain/cashflow.entity").Cashflow} cashflow
     */
    static from(cashflow) {
        const dto = new CashflowResponseDTO();
        dto.id = cashflow.id;
        dto.date = cashflow.date;
        dto.asset_type = cashflow.assetType;
        dto.classification = cashflow.classification;
        dto.content = cashflow.content;
        dto.price = cashflow.price;
        return dto;
    }
}
