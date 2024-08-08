document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const navbar = document.querySelector(".navbar");

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
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slidePage = document.querySelector(".multi-step-registration-form .slide-page");
    const nextButtons = document.querySelectorAll(".multi-step-registration-form .next");
    const prevButtons = document.querySelectorAll(".multi-step-registration-form .prev");
    const submitButton = document.querySelector(".multi-step-registration-form .submit");
    const progressText = document.querySelectorAll(".multi-step-registration-form .step p");
    const progressCheck = document.querySelectorAll(".multi-step-registration-form .step .check");
    const bullet = document.querySelectorAll(".multi-step-registration-form .step .bullet");
    let current = 1;

    nextButtons.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${current * 100}%`;
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        });
    });

    prevButtons.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${(current - 2) * 100}%`;
            bullet[current - 2].classList.remove("active");
            progressCheck[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    });

    submitButton.addEventListener("click", function () {
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
            location.reload();
        }, 800);
    });
});

