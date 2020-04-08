import { useFlowers } from "./FlowersProvider.js";
import Flower from "./Flowers.js";

const flowerTarget = document.querySelector(".flowersList") //select the .flowerList div class on our index.html

const FlowerList = () => {

    const flowers = useFlowers() // Alias flowers created to useFlowers array from our provider
    console.log(flowers)
    //maping over flowers array with a function that takes the currently flower as a parameter and inserts it into the Flower function from Flower.js
    const render = () => {
        flowerTarget.innerHTML = flowers.map(  
            flower => {
                const html = Flower(flower)
                return html
            }

        ).join("")
    }

    render() //invoking the function that has html flower info
}

export default FlowerList