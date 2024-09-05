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
      image: item.image.thumbnail, // Par exemple, ne garder que la miniature
      name: item.name,
      category: item.category,
      price: item.price,
    }));

    console.log(mappedData); // Afficher les données mappées
  
    const container = document.getElementById("items-container");
    mappedData.forEach((item) => {
      const itemElement = document.createElement("div");

      // itemElement.className = maClasse
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>Category: ${item.category}</p>
        <p>Price: $${item.price}</p>
      `;
      container.appendChild(itemElement);
    });
  })
  .catch((error) => console.error("Erreur lors du chargement du JSON:", error));
