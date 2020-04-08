const Flower = (flower) => {
    return `
    <section class="flower__card">
        <header class="flower__header">
            <h1 class="flower__name"> ${flower.name}</h1>
        </header>
        <article class="flower__info">
            <div class="flower__color">${flower.color}</div>
        </article>
    </section>
    `
}

export default Flower