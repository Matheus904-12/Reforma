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

    nextButtons.forEach((btn, index) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${index + 1}00%`;
            bullet[index].classList.add("active");
            progressCheck[index].classList.add("active");
            progressText[index].classList.add("active");
            current = index + 2;
        });
    });

    prevButtons.forEach((btn, index) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${index}00%`;
            bullet[index].classList.remove("active");
            progressCheck[index].classList.remove("active");
            progressText[index].classList.remove("active");
            current = index + 1;
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


window.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

window.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    var tl = gsap.timeline();
    tl.fromTo(".navbar", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".logo img", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 }, "<")
    .fromTo(".nav-links a", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "<")
    .fromTo(".btn", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 }, "<");
});

window.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    var tl = gsap.timeline();
    tl.fromTo(".navbar", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".logo img", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 }, "<")
    .fromTo(".nav-links a", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 1 }, "<")
    .fromTo(".btn", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 }, "<");
});

document.addEventListener('DOMContentLoaded', function() {
// Verifique se a página existe
var currentPath = window.location.pathname;

// Lista de páginas válidas
var validPaths = [
    '/index.html',
    '/finan.html',
    '/veicu.html',
    '/login.html'
];

// Se a página atual não estiver na lista de caminhos válidos e não for a própria página 404
if (!validPaths.includes(currentPath) && currentPath !== './ERROR/404.html') {
    window.location.href = './ERROR/404.html';
}
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("loaded");

    gsap.from(".navbar, .logo, .nav-links a, .btn, .testimonial, .form-container, .footer, .links, .social, .form, .login-container", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power2.out"
    });

    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.querySelector('.form-title');

    function toggleForms(showLogin) {
        if (showLogin) {
            loginForm.classList.add('visible');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            registerForm.classList.remove('visible');
            loginBtn.classList.add('active');
            registerBtn.classList.remove('active');
            formTitle.textContent = 'Login';
        } else {
            registerForm.classList.add('visible');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            loginForm.classList.remove('visible');
            loginBtn.classList.remove('active');
            registerBtn.classList.add('active');
            formTitle.textContent = 'Cadastro';
        }
    }

    loginBtn.addEventListener('click', () => {
        toggleForms(true);
    });

    registerBtn.addEventListener('click', () => {
        toggleForms(false);
    });

    let tl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power2.inOut" } });
    tl.to(".testimonial", { opacity: 1, y: 0, stagger: 0.3, delay: 3 })
      .to(".testimonial", { opacity: 0, y: 50, stagger: 0.3, delay: 3 })
      .to(".testimonial", { opacity: 1, y: 0, stagger: 0.3, delay: 3 });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});