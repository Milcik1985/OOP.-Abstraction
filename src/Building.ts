// 1. Parašyti abstrakčią klasę "Building". Building turi turėt properties: "price", "type", "yearFinished";
export abstract class Building {
    price: number;
    type: string;
    yearFinished: number;

    constructor (price: number, type: string, yearFinished: number){
        this.price = price;
        this.type = type;
        this.yearFinished = yearFinished;
    };

// 2. Abstrakti klasė turi turėt savo metodą buyProperty (console.log išspauzdina "NUPIRKTA")
    buyProperty(): void {};
}

export class House extends Building {
    constructor(price: number, type: string, yearFinished: number) {
        super(price, type, yearFinished)
    };

    buyProperty(): void {
        console.log("NUPIRKTA") 
    };

// 3. Abstrakti klasė turi turėt metodą contactSeller (console.log  ...); zr. Building.ts
    contactSeller() {
        console.log("Contact seller by phone: +37066731845")
    };

// 4. Abstrakti klasė turi turėt abstraktų metodą enterHome;
    enterHome() {
        console.log("You're in the house")
    };

// 5. Abstrakti klasė turi turėt abstraktų metodą arrange renovateBuilding;
    renovateBuilding() {
        console.log("This house needs to be renovated")
    };
}

