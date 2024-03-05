// 6. Parašyt klases HouseBuilding, FlatBuilding;
// 8. FlatBuilding turi turėt papildomus properties "floor", "windowsDirection";
// 9. Sukurtos klasės turi extendint abstrakčią klasę;
import { Building } from "./Building.js";
export class FlatBuilding extends Building {
    constructor(price, type, yearFinished, floor, windowsDirection) {
        super(price, type, yearFinished);
        this.floor = floor;
        this.windowsDirection = windowsDirection;
    }
    // 10. Extendinus klasę nepamiršt užnaudot abstrakčius metodus;
    buyProperty() {
        console.log("Available to buy soon");
    }
}
