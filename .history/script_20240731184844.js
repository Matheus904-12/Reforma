// GSAP Animation for navbar and logo
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".logo", { duration: 1.5, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".nav-links li", {
  duration: 1,
  opacity: 0,
  y: -20,
  stagger: 0.2,
  delay: 0.7,
  ease: "power2.out"
});

// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
