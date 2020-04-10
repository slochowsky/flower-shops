import { useRetailers } from "./FlowerRetailersProvider.js"
import Retailer from "./FlowerRetailers.js"
import { useDistributor } from "../FlowerDistributors/FlowerDistributorsProvider.js"
import { useNurseries } from "../Nurseries/NurseriesProvider.js"
import { useNurseryDistributor } from "../NurseryDistributorsProvider.js"
import { useFlowers } from "../Flowers/FlowersProvider.js"
import { useNurseryFlower } from "../Nurseries/NurseryFlowerProvider.js"


const retailerTarget = document.querySelector(".retailerList")


const RetailerList = () => {

    const retailers = useRetailers()
    console.log("Retailers ARRAY", retailers)
    const distributors = useDistributor()
    console.log("Distributors ARRAY", distributors)
    const nurseries = useNurseries()
    console.log("Nurseries ARRAY", nurseries)
    const flowers = useFlowers()
    console.log("Flowers ARRAY", flowers)
    const nurseryDistributors = useNurseryDistributor()
    console.log("Nursery distributors ARRAY", nurseryDistributors)
    const nurseryFlower = useNurseryFlower()
    console.log("Nursery flower ARRAY", nurseryFlower)



    const render = () => {
        // Map over each retailer to find the distributor whose pk matches the distributor fk on the retailer object.
        retailerTarget.innerHTML = retailers.map(retailer => {
            const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
            //filter out the objects from the entire nurseryDistributor array where
            //the distributorId fk matches the pk on the distributor.
            let nurseryDis = nurseryDistributors.filter(nd => nd.distributorId === distributor.id)
            // Map over the new array that contains the objects from the nurseryDistributors join table 
            // which match to the correct distributor
            const nursDisArray = nurseryDis.map(rd => {
                // For each nurseryDistributor object, find the matching nursery object from the nurseries array 
                // whose pk matches the nurseryDistributorId fk(returns the first match and continues this process until there is nothing to itterate over anymore.)
                return nurseries.find(nursery => nursery.id === rd.nurseryId)
            })
            // Map over each nursery in the new array containing the associated nurseries with the current retailer
            const flowerArray = nursDisArray.map(nursery => {
                // For each nurseryFlowerRelationship object from the join table, filter the nurseryFlower objects (fk) that match with the current nursery id (pk)
                const nursFlowRelation = nurseryFlower.filter(nf => nf.nurseryId === nursery.id)
                // Map over each nurseryFlower object in the new array
                const foundFlowerArray = nursFlowRelation.map(nfr => {
                    // For each nurseryFlower object, perform a find on the full flowers array from the fetch and compare the flower object id (pk)
                    //  to the flowerId (fk) on the nurseryFlower object
                    return flowers.find(flower => flower.id === nfr.flowerId)
                   
                })
                nursery.foundFlower = foundFlowerArray
                return nursery
            })
            return Retailer(retailer, distributor, nursDisArray, flowerArray)
        }
        ).join("")
    }
    render()
}

export default RetailerList