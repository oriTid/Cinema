class Address {

    private _city: string;
    private _street: string;
    private _aptNum: number;
    private _country: string;


    constructor(city: string, street: string, aptnum: number, country: string) {

        this._city = city;
        this._street = street;
        this._aptNum = aptnum;
        this._country = country;

    }
    
    get city() {
        return this._city;
    }

    set city(x: string) {
        this._city = x;
    }

    get street() {
        return this._street;
    }

    set street(x: string) {
        this._street = x;
    }

    get aptNum() {
        return this._aptNum;
    }

    set aptNum(x: number) {

        if (x > 0) {
            Math.floor(x)
            this._aptNum = x;
        }
        
    }

    get country() {
        return this._country;
    }

    set country(x: string) {
        this._country = x;
    }

    /// Methods////

    public getInfo(): string {
        let s: string;
             
        s = " full address is " + this.aptNum + " " + this.street +" St.     " + this.city + ",  " + this.country;

        return s;
    }
}