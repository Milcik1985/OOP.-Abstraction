// 1. Parašyti abstrakčią klasę "Building". Building turi turėt properties: "price", "type", "yearFinished";
export class Building {
    constructor(price, type, yearFinished) {
        this.price = price;
        this.type = type;
        this.yearFinished = yearFinished;
    }
    ;
    // 2. Abstrakti klasė turi turėt savo metodą buyProperty (console.log išspauzdina "NUPIRKTA")
    buyProperty() { }
    ;
}
export class House extends Building {
    constructor(price, type, yearFinished) {
        super(price, type, yearFinished);
    }
    ;
    buyProperty() {
        console.log("NUPIRKTA");
    }
    ;
    // 3. Abstrakti klasė turi turėt metodą contactSeller (console.log  ...); zr. Building.ts
    contactSeller() {
        console.log("Contact seller by phone: +37066731845");
    }
    ;
    // 4. Abstrakti klasė turi turėt abstraktų metodą enterHome;
    enterHome() {
        console.log("You're in the house");
    }
    ;
    // 5. Abstrakti klasė turi turėt abstraktų metodą arrange renovateBuilding;
    renovateBuilding() {
        console.log("This house needs to be renovated");
    }
    ;
}
