import { useRetailers } from "./FlowerRetailersProvider.js"
import Retailer from "./FlowerRetailers.js"
import { useDistributor } from "../FlowerDistributors/FlowerDistributorsProvider.js"
import { useRetailersDistributor } from "../RetailersDistributorsProvider.js"

const retailerTarget = document.querySelector(".retailerList")


const RetailerList = () => {

    const retailers = useRetailers()
    console.log("RETAILERS ARRAY", retailers)
    const distributors = useDistributor()
    console.log("distributors ARRAY", distributors)
    const retailersDistributors = useRetailersDistributor()
    console.log("Retailers distributors ARRAY", retailersDistributors)


    const render = () => {
        retailerTarget.innerHTML = retailers.map(retailer => {

           let retailerDistributor = retailersDistributors.filter(rd => rd.distributorId === retailer.id)

            const foundRetailerArray = retailerDistributor.map(rd => {
              return retailers.find(retailer => retailer.id === rd.retailerId)
            })
                return Retailer(retailer, foundRetailerArray)

            }
        ).join("")
    }
    render()
}

export default RetailerList