import { House } from './Building.js';
import { HouseBuilding } from './House.js';
import { FlatBuilding } from './Flat.js';
const newHouse = new House(100000, "block", 1998);
newHouse.buyProperty();
console.log(newHouse);
// 3. Abstrakti klasė turi turėt metodą contactSeller (console.log  ...); zr. Building.ts
newHouse.contactSeller();
// 4. Abstrakti klasė turi turėt abstraktų metodą enterHome; zr. Building.ts
newHouse.enterHome();
// 5. Abstrakti klasė turi turėt abstraktų metodą arrange renovateBuilding; zr. Building.ts
newHouse.renovateBuilding();
// 6. Parašyt klases HouseBuilding, FlatBuilding; zr. House.ts ir Flat.ts
// 7. HouseBuilding turi turėt papildomus properties "yardArea", "floors"; House.ts
const newHouseBuilding = new HouseBuilding(300000, "block", 2024, 150000, 2);
console.log(newHouseBuilding);
newHouseBuilding.buyProperty();
// 8. FlatBuilding turi turėt papildomus properties "floor", "windowsDirection"; zr Flat.ts
const newFlatBuilding = new FlatBuilding(120000, "block", 2023, 4, "East");
console.log(newFlatBuilding);
// 9. Sukurtos klasės turi extendint abstrakčią klasę; zr. House.ts ir Flat.ts
// 10. Extendinus klasę nepamiršt užnaudot abstrakčius metodus; zr. House.ts ir Flat.ts
newHouseBuilding.buyProperty();
newFlatBuilding.buyProperty();
