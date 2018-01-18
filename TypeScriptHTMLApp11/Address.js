var Address = /** @class */ (function () {
    function Address(city, street, aptnum, country) {
        this._city = city;
        this._street = street;
        this._aptNum = aptnum;
        this._country = country;
    }
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (x) {
            this._city = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (x) {
            this._street = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "aptNum", {
        get: function () {
            return this._aptNum;
        },
        set: function (x) {
            if (x > 0) {
                Math.floor(x);
                this._aptNum = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (x) {
            this._country = x;
        },
        enumerable: true,
        configurable: true
    });
    /// Methods////
    Address.prototype.getInfo = function () {
        var s;
        s = " full address is " + this.aptNum + " " + this.street + " St.     " + this.city + ",  " + this.country;
        return s;
    };
    return Address;
}());
//# sourceMappingURL=Address.js.map