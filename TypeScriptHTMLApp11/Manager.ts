class Manager {

    private _ManagerFullName: string;
    private _ManagerAddress: Address;

    constructor(mangerfullname: string, manageraddress: Address) {

        this._ManagerFullName = mangerfullname;
        this._ManagerAddress = manageraddress;
    }

    get ManagerFullName() {

        return this._ManagerFullName;
    }
    set ManagerFullName(x: string) {

        this._ManagerFullName = x;
    }

    get ManagerAdress() {

        return this._ManagerAddress;
    }

    set ManagerAdress(x: Address) {
        this._ManagerAddress = x;
    }


    //// Methods////

    public printManagerDetails(): void {
        document.write(`<br/>Manager name is : ${this.ManagerFullName}`);
        document.write(`<br/>${this.ManagerFullName}'s ${this.ManagerAdress.getInfo()}`);

    }
}