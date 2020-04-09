const Retailer = (retailer) => {
    return `
    <section class="retailer__card">
        <header class="retailer__header">
            <h1 class="retailer__name"> ${retailer.name}</h1>
        </header>
        <article class="retailer__city">
            <div class="retailer__city">${retailer.city}</div>
            <div class="retailer__state">${retailer.state}</div>
            <div class="retailer__address">${retailer.address}</div>
        </article>
    </section>
    `
}

export default Retailer