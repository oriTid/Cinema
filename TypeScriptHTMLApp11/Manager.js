var Manager = /** @class */ (function () {
    function Manager(mangerfullname, manageraddress) {
        this._ManagerFullName = mangerfullname;
        this._ManagerAddress = manageraddress;
    }
    Object.defineProperty(Manager.prototype, "ManagerFullName", {
        get: function () {
            return this._ManagerFullName;
        },
        set: function (x) {
            this._ManagerFullName = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Manager.prototype, "ManagerAdress", {
        get: function () {
            return this._ManagerAddress;
        },
        set: function (x) {
            this._ManagerAddress = x;
        },
        enumerable: true,
        configurable: true
    });
    //// Methods////
    Manager.prototype.printManagerDetails = function () {
        document.write("<br/>Manager name is : " + this.ManagerFullName);
        document.write("<br/>" + this.ManagerFullName + "'s " + this.ManagerAdress.getInfo());
    };
    return Manager;
}());
//# sourceMappingURL=Manager.js.map