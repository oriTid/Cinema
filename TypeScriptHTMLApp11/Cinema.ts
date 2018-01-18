class Cinema {
    private _cinemaname: string;
    private _numberOfSeats: number;
    private _openHour: number;
    private _closingHour: number;
    private _foodArr: Array<Foods>;
    private _cinemamanager: Manager;

    constructor(cinemaname: string, openHour: number = 6, closingHour: number = 23, foodArr: Array<Foods>, numberOfSeats?: number, cinemamanag?: Manager) {
        this.cinemaname = cinemaname;
        this.openHour = openHour;
        this.finishHour = closingHour;
        this._numberOfSeats = numberOfSeats;
        this.foodArr = foodArr;
        this._cinemamanager = cinemamanag;
    }

    get cinemaManager() {
        return this._cinemamanager;
    }


    set foodArr(a: Array<Foods>) {
        this._foodArr = a;
    }

    get foodArr(): Array<Foods> {
        return this._foodArr;
    }

    set numberOfSeats(a: number) {
        this._numberOfSeats = a;
    }
    get numberOfSeats(): number {

        return this._numberOfSeats;
    }

    set cinemaname(x: string) {

        this._cinemaname = x;
    }
    get cinemaname(): string {
        return this._cinemaname;
    }

    set openHour(x: number) {
        Math.floor(x);
        if (x >= 6 && x <= 12) {
            this._openHour = x;
        }
    }
    get openHour(): number {
        return this._openHour;
    }

    set finishHour(x: number) {
        Math.floor(x);
        if (x >= 18 && x <= 23) {
            this._closingHour = x;
        }

    }
    get finishHour(): number {
        return this._closingHour;
    }

    ////// Functions //////

    private _totalhours(): number {
        return (this._closingHour - this._openHour);

    }


    public printCinemaDetails(): void {
        document.write(`<br/>`);
        document.write(`<br/>Cinema name is : ${this.cinemaname}<br/>`);
        document.write(`Number of chairs is : ${this.numberOfSeats}<br/>`);
        document.write(`Open Hour is : ${this.openHour}<br/>`);
        document.write(`closing Hour is : ${this.finishHour}<br/>`);
        document.write(`total open hours is : ${this._totalhours()}<br/>`);
        //document.write(` *********** ${this.cinemaname} Menu : **************** <br/>`);
        //document.write(`<br/><br/>`);

    }

    public printCinemaFoods(): void {
        for (let i: number = 0; i < this.foodArr.length; i++) {
            this.foodArr[i].printItemdetalis();
        }
    }
}
