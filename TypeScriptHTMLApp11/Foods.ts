class Foods {

    private _itemName: string;
    private _itemPrice: number;
    private _isKosher: boolean;
    private _itemManufactor: string;
    private _itemExpiary: number;

    constructor(itemName: string, itemPrice: number, isKosher: boolean, itemManufactor: string, itemExpairy: number = 2018) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.isKosher = isKosher;
        this.itemManufactor = itemManufactor;
    }

    set itemName(x: string) {
        this._itemName = x;
    }
    get itemName(): string {
        return this._itemName;
    }

    set itemPrice(x: number) {
        this._itemPrice = x;
    }
    get itemPrice(): number {
        return this._itemPrice;
    }

    set isKosher(x: boolean) {
        this._isKosher = x;
    }
    get isKosher(): boolean {
        return this._isKosher;
    }

    set itemManufactor(x: string) {
        this._itemManufactor = x;
    }
    get itemManufactor(): string {
        return this._itemManufactor;
    }

    set itemExpairy(x: number) {
        if (x >= this.itemExpairy) {
            this._itemExpiary = x;
        }
    }
    get itemExpairy(): number {
        return this._itemExpiary;
    }

    ////// Functions //////

    public printItemdetalis(): void {
        document.write(`<br/>food name is : ${this.itemName}<br/>`);
        document.write(`${this.itemName}'s price is : ${this.itemPrice}<br/>`);
        document.write(`${this.itemName} is Kosher ? ${this.isKosher}<br/>`);
        document.write(`${this.itemName}'s Manufactor is : ${this.itemManufactor}<br/>`);
        document.write(`${this.itemName}'s expairy year is : ${this.itemExpairy}<br/><br/>`);
         //document.write(`<br/><br/>`);
    }
}