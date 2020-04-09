import { useRetailers } from "./FlowerRetailersProvider.js"
import Retailer from "./FlowerRetailers.js"
import { useDistributor } from "../FlowerDistributors/FlowerDistributorsProvider.js"
import { useNurseryDistributor } from "../NurseryDistributorsProvider.js"
import { useNurseries } from "../Nurseries/NurseriesProvider.js"

const retailerTarget = document.querySelector(".retailerList")


const RetailerList = () => {

    const retailers = useRetailers()
    console.log("retailers ARRAY", retailers)
    const distributors = useDistributor()
    console.log("distributors ARRAY", distributors)
    const nurseries = useNurseries()
    console.log("nurseries ARRAY", nurseries)
    const nurseryDistributors = useNurseryDistributor()
    console.log("Retailers distributors ARRAY", nurseryDistributors)


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
            return Retailer(retailer, distributor, nursDisArray)

        }
        ).join("")
    }
    render()
}

export default RetailerList