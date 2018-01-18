var Foods = /** @class */ (function () {
    function Foods(itemName, itemPrice, isKosher, itemManufactor, itemExpairy) {
        if (itemExpairy === void 0) { itemExpairy = 2018; }
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.isKosher = isKosher;
        this.itemManufactor = itemManufactor;
    }
    Object.defineProperty(Foods.prototype, "itemName", {
        get: function () {
            return this._itemName;
        },
        set: function (x) {
            this._itemName = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "itemPrice", {
        get: function () {
            return this._itemPrice;
        },
        set: function (x) {
            this._itemPrice = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "isKosher", {
        get: function () {
            return this._isKosher;
        },
        set: function (x) {
            this._isKosher = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "itemManufactor", {
        get: function () {
            return this._itemManufactor;
        },
        set: function (x) {
            this._itemManufactor = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "itemExpairy", {
        get: function () {
            return this._itemExpiary;
        },
        set: function (x) {
            if (x >= this.itemExpairy) {
                this._itemExpiary = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ////// Functions //////
    Foods.prototype.printItemdetalis = function () {
        document.write("<br/>food name is : " + this.itemName + "<br/>");
        document.write(this.itemName + "'s price is : " + this.itemPrice + "<br/>");
        document.write(this.itemName + " is Kosher ? " + this.isKosher + "<br/>");
        document.write(this.itemName + "'s Manufactor is : " + this.itemManufactor + "<br/>");
        document.write(this.itemName + "'s expairy year is : " + this.itemExpairy + "<br/><br/>");
        //document.write(`<br/><br/>`);
    };
    return Foods;
}());
//# sourceMappingURL=Foods.js.map