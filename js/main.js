// JavaScript for image carousel with automatic sliding

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;  // Loop back to the first image
    showImage(currentIndex);
}

// Show the initial image
showImage(currentIndex);

// Set interval for auto-sliding (change 3000 to any duration in milliseconds)
setInterval(showNextImage, 3000);

// Optional: For manual controls if you still want to use them
document.querySelector('.next').addEventListener('click', () => {
    showNextImage();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;  // Loop to last image if needed
    showImage(currentIndex);
});

const carousels = {
    about: {
        currentIndex: 0,
        slides: document.querySelectorAll('#carouselAbout img')
    },
    likes: {
        currentIndex: 0,
        slides: document.querySelectorAll('#carouselLikes img')
    },
    dislikes: {
        currentIndex: 0,
        slides: document.querySelectorAll('#carouselDislikes img')
    }
};

function showSlides(carouselId, index) {
    const carousel = carousels[carouselId];
    const slides = carousel.slides;
    const totalSlides = slides.length;

    if (index >= totalSlides) carousel.currentIndex = 0;
    if (index < 0) carousel.currentIndex = totalSlides - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === carousel.currentIndex ? 'block' : 'none';
    });
}

function moveSlides(carouselId, n) {
    const carousel = carousels[carouselId];
    carousel.currentIndex += n;
    showSlides(carouselId, carousel.currentIndex);
}

// Initialize carousels
Object.keys(carousels).forEach(carouselId => {
    showSlides(carouselId, carousels[carouselId].currentIndex);
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const backgroundMusic = document.getElementById('background-music');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}


document.querySelector('.hero-button').addEventListener('click', toggleMusic);