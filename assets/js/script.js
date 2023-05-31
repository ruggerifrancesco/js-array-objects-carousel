const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.getElementById('carouselArrayContainer');
const carouselContainerThumbnails = document.getElementById('carouselArrayThumbnail');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let carouselItems = document.querySelectorAll('.carousel-item');

// Keeps track of the currently active image index
let activeIndex = 0;

// Function Create image element
function createImageElement(src, alt) {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.alt = alt;

    return imageElement;
}

images.forEach((item, index) => {
    // Create carousel item container
    const carouselItem = document.createElement('div');
    const carouselItemThumbnails = document.createElement('div');
    const carouselInShadow = document.createElement('div');
    const carouselTitle = document.createElement('h1');
    const carouselParagraph = document.createElement('p');

    carouselItem.classList.add('carousel-item');
    carouselItemThumbnails.classList.add('carousel-item-thumbnail');
    carouselInShadow.classList.add('carousel-inner-shadow');
    
    if (index === 0) {
      carouselItem.classList.add('active-frame');
      carouselItemThumbnails.classList.add('active-frame-thumbnail');
    }

    const imageCarousel = createImageElement(`assets/${item.image}`, item.title);
    const imageCarouselThumbnail = createImageElement(`assets/${item.image}`, item.title);
    
    // Append image - shadow and img at the labels
    carouselItem.appendChild(imageCarousel);
    carouselItem.appendChild(carouselInShadow);
    carouselItemThumbnails.appendChild(imageCarouselThumbnail);

    // Title and paragraph Append
    carouselItem.appendChild(carouselTitle);
    carouselTitle.textContent = item.title;

    carouselItem.appendChild(carouselParagraph);
    carouselParagraph.textContent= item.text;
    
    // Append carousel item container to carousel container
    carouselContainer.appendChild(carouselItem);
    carouselContainerThumbnails.appendChild(carouselItemThumbnails);
});

// Update carouselItems array after adding items dynamically
carouselItems = document.querySelectorAll('.carousel-item');

