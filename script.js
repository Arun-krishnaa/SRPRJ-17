const products = [
    {
        id: 1,
        title: "eBooks:HTML",
        price: 999,
        description: "Master HTML with expert tips. Enhance your web development skills and create stunning websites with practical insights for HTML mastery.",
        image: "https://www.svgrepo.com/show/303205/html-5.svg",
        tags: ["eBooks", "Web Development"],
    },
    {
        id: 2,
       title: "Software:Adobe Photoshop",
        price: 14999,
        description: "Unlock your creativity with Adobe Photoshop. Learn photo editing, graphic design, and visual effects for print, web, and mobile. Master the industry-leading image editing software.",
        image: "https://www.svgrepo.com/show/303207/photoshop.svg",
        tags: ["Software", "Design"],
    },
    {
        id: 3,
        title: "Course:Machine Learning",
        price: 19999,
        description: "Explore machine learning techniques and algorithms. Learn how to build predictive models and apply machine learning to real-world problems. Master the fundamentals of machine learning and deep learning.",
        image: "https://www.svgrepo.com/show/303208/machine-learning.svg",
        tags: ["Course", "Artificial Intelligence"],
    },
];

const productContainer = document.querySelector('.product-list');
const searchBar = document.querySelector('#search-bar');
const categoryFilter = document.querySelector('#category-filter');

// generate product cards dynamically
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">RS.${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="purchase-button" data-product-id="${product.id}" data-product-price="${product.price}">Buy Now</button>
        <div class="product-tags">
            ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    productContainer.appendChild(productCard);
});

// Add event listener to each "Buy Now" button
document.querySelectorAll('.purchase-button').forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to payment.html
        window.location.href = 'payment.html';
    });
});

// Add event listener to search bar
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    });
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">RS.${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="purchase-button" data-product-id="${product.id}" data-product-price="${product.price}">Buy Now</button>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        productContainer.appendChild(productCard);
    });
});

// Add event listener to category filter
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const filteredProducts = products.filter(product => {
        return selectedCategory === '' || product.tags.includes(selectedCategory);
    });
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">RS.${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="purchase-button" data-product-id="${product.id}" data-product-price="${product.price}">Buy Now</button>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        productContainer.appendChild(productCard);
    });
});