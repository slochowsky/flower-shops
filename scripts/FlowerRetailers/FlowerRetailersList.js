import { useRetailers } from "./FlowerRetailersProvider.js"
import Retailer from "./FlowerRetailers.js"

const retailerTarget = document.querySelector(".retailerList")


const RetailerList = () => {

    const retailers = useRetailers()
    console.log("RETAILERS ARRAY", retailers)

    const render = () => {
        
        retailerTarget.innerHTML = retailers.map(
            retailer => {
                return Retailer(retailer)
                
            }
        ).join("")
    }
    render()
}

export default RetailerList