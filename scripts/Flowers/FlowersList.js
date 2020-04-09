import { useFlowers } from "./FlowersProvider.js";
import Flower from "./Flowers.js";

const flowerTarget = document.querySelector(".flowersList") //select the .flowersList div class on our index.html

const FlowerList = () => {

    const flowers = useFlowers() // flowers created to useFlowers array from our provider
    console.log("FLOWER ARRAY", flowers)
    //maping over flowers array with a function that takes the currently flower as a parameter and inserts it into the Flower function from Flower.js
    const render = () => {
        flowerTarget.innerHTML = flowers.map(  
            flower => {
               return Flower(flower)
                
            }

        ).join("")
    }

    render() //invoking the function that has html flower info
}

export default FlowerList