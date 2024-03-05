// 6. Parašyt klases HouseBuilding, FlatBuilding;
// 7. HouseBuilding turi turėt papildomus properties "yardArea", "floors";
// 9. Sukurtos klasės turi extendint abstrakčią klasę; 
import { Building } from "./Building.js";
export class HouseBuilding extends Building {
    constructor(price, type, yearFinished, yardArea, floors) {
        super(price, type, yearFinished);
        this.yardArea = yardArea;
        this.floors = floors;
    }
    ;
    // 10. Extendinus klasę nepamiršt užnaudot abstrakčius metodus;
    buyProperty() {
        console.log("Available to buy");
    }
}
