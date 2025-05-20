const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;
const mainImg = document.getElementById("currentImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateGallery() {
  mainImg.src = images[currentIndex];
  thumbnails.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
}

function setImage(index) {
  currentIndex = index;
  updateGallery();
}

// Initial state
updateGallery();