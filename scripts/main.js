import FlowerList from "./Flowers/FlowersList.js";
import { getFlowers } from "./Flowers/FlowersProvider.js";


getFlowers()
.then(FlowerList)
