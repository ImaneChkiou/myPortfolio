// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// code of the popup to show the examples of the graphics - popup1
// Get elements
const openGallery1 = document.getElementById('openGallery1');
const closeGallery1 = document.getElementById('closeGallery1');
const galleryPopup1 = document.getElementById('galleryPopup1');

// Show the gallery pop-up
openGallery1.addEventListener('click', () => {
    galleryPopup1.style.display = 'flex';
});

// Hide the gallery pop-up
closeGallery1.addEventListener('click', () => {
    galleryPopup1.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === galleryPopup1) {
        galleryPopup1.style.display = 'none';
    }
});


// code of the popup to show the examples of the graphics - popup2

const openGallery2 = document.getElementById('openGallery2');
const closeGallery2 = document.getElementById('closeGallery2');
const galleryPopup2 = document.getElementById('galleryPopup2');

// Show the gallery pop-up
openGallery2.addEventListener('click', () => {
    galleryPopup2.style.display = 'flex';
});

// Hide the gallery pop-up
closeGallery2.addEventListener('click', () => {
    galleryPopup2.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === galleryPopup2) {
        galleryPopup2.style.display = 'none';
    }
});

// code of the popup to show the examples of the graphics - popup3

const openGallery3 = document.getElementById('openGallery3');
const closeGallery3 = document.getElementById('closeGallery3');
const galleryPopup3 = document.getElementById('galleryPopup3');

// Show the gallery pop-up
openGallery3.addEventListener('click', () => {
    galleryPopup3.style.display = 'flex';
});

// Hide the gallery pop-up
closeGallery3.addEventListener('click', () => {
    galleryPopup3.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === galleryPopup3) {
        galleryPopup3.style.display = 'none';
    }
});

// code of the popup to show the examples of the graphics - popup4

const openGallery4 = document.getElementById('openGallery4');
const closeGallery4 = document.getElementById('closeGallery4');
const galleryPopup4 = document.getElementById('galleryPopup4');

// Show the gallery pop-up
openGallery4.addEventListener('click', () => {
    galleryPopup4.style.display = 'flex';
});

// Hide the gallery pop-up
closeGallery4.addEventListener('click', () => {
    galleryPopup4.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === galleryPopup4) {
        galleryPopup4.style.display = 'none';
    }
});

// code of the popup to show the examples of the graphics - popup5

const openGallery5 = document.getElementById('openGallery5');
const closeGallery5 = document.getElementById('closeGallery5');
const galleryPopup5 = document.getElementById('galleryPopup5');

// Show the gallery pop-up
openGallery5.addEventListener('click', () => {
    galleryPopup5.style.display = 'flex';
});

// Hide the gallery pop-up
closeGallery5.addEventListener('click', () => {
    galleryPopup5.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === galleryPopup5) {
        galleryPopup5.style.display = 'none';
    }
});
