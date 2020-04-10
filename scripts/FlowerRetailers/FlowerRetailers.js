const Retailer = (retailer, distributor, nursDisArray, flowerArray) => {
    console.log("VALUE??", distributor, flowerArray)
    return `
    <section class="retailer__card">
        <header class="retailer__header">
            <h1 class="retailer__name"> Retailer: ${retailer.name}</h1>
        </header>
        <article class="retailer__city">
            <div class="retailer__city">City: ${retailer.city}</div>
            <div class="retailer__state">State: ${retailer.state}</div>
            <div class="retailer__address">Address: ${retailer.address}</div>
            <ol>Distributor: ${distributor.name}</ol>
            ${nursDisArray.map(nursery => `<li> Nursery: ${nursery.name}</li>`).join("")}
<br>
            ${flowerArray.map(flower =>
            `<div>Nursery's avalible flowers:</div>
            ${flower.map(individualFlower => { return `<li>${individualFlower.name}</li>` }).join("")}`
            ).join("")}
        </article>
    </section>
    `
}

export default Retailer