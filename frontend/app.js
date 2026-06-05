// constants

const searchBar = document.getElementById("search-bar");
const cardContainer = document.getElementById("card-container");

const cards = [
    {
        name: "Charizard",
        set: "Evolutions",
        rarity: "Holofoil",
        price: 95.50,
        trend: "+10.1%",
        image: "https://tcgplayer-cdn.tcgplayer.com/product/124026_in_1000x1000.jpg"
    },
    {
        name: "Pikachu",
        set: "Generations (Radiant Collection)",
        rarity: "Full Art",
        price: 127.42,
        trend: "-6.1%",
        image: "https://tcgplayer-cdn.tcgplayer.com/product/113771_in_1000x1000.jpg"
    }
];

// logic

function renderCards(cardsToRender) {
    cardContainer.innerHTML = "";

    cardsToRender.forEach(card => {
        const trendClass = card.trend.startsWith("+")
            ? "positive-trend"
            : "negative-trend";

        cardContainer.innerHTML += `
            <div class="card">
                <img src="${card.image}" alt = "${card.name}">
                <h2>${card.name}</h2>

                <div class="card-info">
                    <p>${card.set}</p>
                    <p class="right">${card.rarity}</p>

                    <p>$${card.price.toFixed(2)}</p>
                    <p class="right ${trendClass}">${card.trend}</p>
                </div>
            </div>
        `;
    });
}

renderCards(cards);

searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    
    const filteredCards = cards.filter(card => {
        return (
            card.name.toLowerCase().includes(searchText) ||
            card.set.toLowerCase().includes(searchText) ||
            card.rarity.toLowerCase().includes(searchText)
        );
    });

    renderCards(filteredCards);
});