fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Erreur HTTP ${response.status} : ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((data) => {
    // Mapper les données
    const mappedData = data.map((item) => ({
      image: item.image.desktop, // Par exemple, ne garder que la miniature
      name: item.name,
      category: item.category,
      price: item.price,
    }));

    console.log(mappedData); // Afficher les données mappées
  
    const container = document.getElementById("items-container");
    mappedData.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = 'maClasse'
      itemElement.innerHTML = `

        <img src="${item.image}" alt="${item.name}" class="imgs">
        <button class="button-add"><img src="assets/images/icon-add-to-cart.svg" alt="icon" class="icon">Add To Card</button>
        <p class="category">${item.category}</p>
        <h2 class="name">${item.name}</h2>
        <p class="price"> $${item.price}</p>
      
      `;
      container.appendChild(itemElement);
    });
  })

  function createCard() {
    const card = document.createElement('div');
    card.classList.add('item-card');

    card.innerHTML = `
    <p class="panier">Your Cart <span>()</span></p>
    <img src="assets/images/illustration-empty-cart.svg" class="img-panier">
    <p class="text-panier">Your added items will appear here</p>

    `;

    return card;
  }

  function addCardToContainer() {
    const container = document.getElementById('card-container');
    const newCard = createCard();
    container.appendChild(newCard);
  }
  window.onload = addCardToContainer;

  // .catch((error) => console.error("Erreur lors du chargement du JSON:", error));
