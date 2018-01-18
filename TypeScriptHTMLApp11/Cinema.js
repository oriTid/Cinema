var Cinema = /** @class */ (function () {
    function Cinema(cinemaname, openHour, closingHour, foodArr, numberOfSeats, cinemamanag) {
        if (openHour === void 0) { openHour = 6; }
        if (closingHour === void 0) { closingHour = 23; }
        this.cinemaname = cinemaname;
        this.openHour = openHour;
        this.finishHour = closingHour;
        this._numberOfSeats = numberOfSeats;
        this.foodArr = foodArr;
        this._cinemamanager = cinemamanag;
    }
    Object.defineProperty(Cinema.prototype, "cinemaManager", {
        get: function () {
            return this._cinemamanager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "foodArr", {
        get: function () {
            return this._foodArr;
        },
        set: function (a) {
            this._foodArr = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "numberOfSeats", {
        get: function () {
            return this._numberOfSeats;
        },
        set: function (a) {
            this._numberOfSeats = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "cinemaname", {
        get: function () {
            return this._cinemaname;
        },
        set: function (x) {
            this._cinemaname = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "openHour", {
        get: function () {
            return this._openHour;
        },
        set: function (x) {
            Math.floor(x);
            if (x >= 6 && x <= 12) {
                this._openHour = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "finishHour", {
        get: function () {
            return this._closingHour;
        },
        set: function (x) {
            Math.floor(x);
            if (x >= 18 && x <= 23) {
                this._closingHour = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    ////// Functions //////
    Cinema.prototype._totalhours = function () {
        return (this._closingHour - this._openHour);
    };
    Cinema.prototype.printCinemaDetails = function () {
        document.write("<br/>");
        document.write("<br/>Cinema name is : " + this.cinemaname + "<br/>");
        document.write("Number of chairs is : " + this.numberOfSeats + "<br/>");
        document.write("Open Hour is : " + this.openHour + "<br/>");
        document.write("closing Hour is : " + this.finishHour + "<br/>");
        document.write("total open hours is : " + this._totalhours() + "<br/>");
        //document.write(` *********** ${this.cinemaname} Menu : **************** <br/>`);
        //document.write(`<br/><br/>`);
    };
    Cinema.prototype.printCinemaFoods = function () {
        for (var i = 0; i < this.foodArr.length; i++) {
            this.foodArr[i].printItemdetalis();
        }
    };
    return Cinema;
}());
//# sourceMappingURL=Cinema.js.map