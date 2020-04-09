import FlowerList from "./Flowers/FlowersList.js";
import { getFlowers } from "./Flowers/FlowersProvider.js";
import { getRetailers } from "./FlowerRetailers/FlowerRetailersProvider.js";
import RetailerList from "./FlowerRetailers/FlowerRetailersList.js";


getFlowers()
.then(getRetailers)
.then(FlowerList)
.then(RetailerList)
