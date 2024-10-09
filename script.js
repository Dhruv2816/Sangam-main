let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide functionality
setInterval(() => moveSlide(1), 5000); // Change image every 5 seconds
