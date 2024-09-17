// Initialize Bootstrap Carousel
var carousel = document.querySelector('#testimonial-carousel');
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000,
    wrap: true
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
