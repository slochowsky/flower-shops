import FlowerList from "./Flowers/FlowersList.js";
import { getFlowers } from "./Flowers/FlowersProvider.js";
import { getRetailers } from "./FlowerRetailers/FlowerRetailersProvider.js";
import RetailerList from "./FlowerRetailers/FlowerRetailersList.js";
import { getDistributor } from "./FlowerDistributors/FlowerDistributorsProvider.js";
import { getRetailersDistributor } from "./RetailersDistributorsProvider.js";


getFlowers()
.then(getRetailers)
.then(getDistributor)
.then(getRetailersDistributor)
.then(FlowerList)
.then(RetailerList)
