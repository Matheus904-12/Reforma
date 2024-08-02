document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const navbar = document.querySelector(".navbar");

    // Animação da logo e navbar
    gsap.from(logo, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "bounce"
    });

    gsap.from(navbar, {
        duration: 1,
        opacity: 0,
        y: -100,
        ease: "power2.out"
    });

    // Código para gerenciamento dos filtros de produtos
    const filtros = document.querySelectorAll('.filtro');
    const carrosseis = document.querySelectorAll('.carrossel');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            const filter = filtro.getAttribute('data-filter');

            filtros.forEach(btn => btn.classList.remove('active'));
            filtro.classList.add('active');

            carrosseis.forEach(carrossel => {
                if (carrossel.classList.contains(filter) || filter === 'all') {
                    carrossel.classList.add('active');
                } else {
                    carrossel.classList.remove('active');
                }
            });
        });
    });

    // Ativar o primeiro filtro (Todos) por padrão
    filtros[0].click();

    // Código para o carrossel de cards
    const carrossel = document.querySelector('.carrossel');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const scrollToCard = (index) => {
        const cardWidth = carrossel.children[0].offsetWidth;
        carrossel.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateDots();
    };

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < carrossel.children.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToCard(index);
        });
    });

    updateDots(); // Inicializa os pontos ativos
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
