export class Cashflow {
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

    /**
     *
     * @param {number} id
     * @param {Date} date
     * @param {string} assetType
     * @param {string} classification
     * @param {string} content
     * @param {string} price
     */
    constructor(id, date, assetType, classification, content, price) {
        this.id = id;
        this.date = date;
        this.assetType = assetType;
        this.classification = classification;
        this.content = content;
        this.price = price;
    }
}
