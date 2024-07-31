document.addEventListener('DOMContentLoaded', () => {
    gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
    gsap.from('.hero-content', { duration: 1, scale: 0.5, opacity: 0, ease: 'elastic', delay: 0.5 });
    gsap.from('.services-grid .service-card', {
        duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 1, ease: 'power2'
    });
    gsap.from('.products-grid .product-card', {
        duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 1.5, ease: 'power2'
    });
    gsap.from('.quality-grid .quality-card', {
        duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 2, ease: 'power2'
    });
    gsap.from('footer', { duration: 1, y: 100, opacity: 0, delay: 2.5, ease: 'power2' });
});
