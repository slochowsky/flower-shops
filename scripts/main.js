import FlowerList from "./Flowers/FlowersList.js";
import { getFlowers } from "./Flowers/FlowersProvider.js";
import { getRetailers } from "./FlowerRetailers/FlowerRetailersProvider.js";
import RetailerList from "./FlowerRetailers/FlowerRetailersList.js";
import { getDistributor } from "./FlowerDistributors/FlowerDistributorsProvider.js";
import { getNurseryDistributor } from "./NurseryDistributorsProvider.js";
import { getNurseries } from "./Nurseries/NurseriesProvider.js";
import { getNurseryFlower } from "./Nurseries/NurseryFlowerProvider.js";



getFlowers()
.then(getRetailers)
.then(getDistributor)
.then(getNurseries)
.then(getNurseryDistributor)
.then(getNurseryFlower)
.then(RetailerList)

