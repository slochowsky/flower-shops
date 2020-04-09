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
        retailerTarget.innerHTML = retailers.map(retailer => {

            const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)

           let nurseryDis = nurseryDistributors.filter(nd => nd.distributorId === distributor.id)

            const nursDisArray = nurseryDis.map(rd => {
              return nurseries.find(nursery => nursery.id === rd.nurseryId)
            })
                return Retailer(retailer, distributor, nursDisArray)

            }
        ).join("")
    }
    render()
}

export default RetailerList