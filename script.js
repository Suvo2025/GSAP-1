// Wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {

  // Smooth header animation
  gsap.from("h1", { y: -50, opacity: 0, duration: 1 });
  gsap.from("p", { y: -30, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(".explore-btn", { scale: 0, opacity: 0, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });

  // Floating blob animation
  gsap.to(".blob1", {
    x: 100,
    y: 50,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".blob2", {
    x: -100,
    y: -50,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Scroll-triggered animation for cards
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".card", {
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });

  // Button scrolls to gallery
  document.querySelector(".explore-btn").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: ".gallery", ease: "power2.inOut" });
  });
});
