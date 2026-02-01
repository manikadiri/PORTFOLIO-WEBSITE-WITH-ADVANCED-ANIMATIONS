// Typing Effect (Only on Home page)
const typingElement = document.querySelector(".typing");

if (typingElement) {
  const roles = ["Frontend Developer", "Python Learner", "Data Scientist"];
  let index = 0;
  let charIndex = 0;
  let currentRole = "";
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting) {
      currentRole = roles[index].substring(0, charIndex++);
      typingElement.textContent = currentRole;

      if (charIndex > roles[index].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      currentRole = roles[index].substring(0, charIndex--);
      typingElement.textContent = currentRole;

      if (charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
  typeEffect();
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// Hero Animations (Only if hero exists)
if (document.querySelector(".hero-text")) {
  gsap.from(".hero-text", {
    x: -80,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero-card", {
    x: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.to(".glow", {
    scale: 1.4,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

// Section reveal on scroll
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});

// Skills cards animation
if (document.querySelector(".skill-card")) {
  gsap.from(".skill-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 70%",
    },
  });
}

// Project cards animation
if (document.querySelector(".project-card")) {
  gsap.from(".project-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 70%",
    },
  });
} // Skill progress animation
const progressBars = document.querySelectorAll(".skill-progress");

if (progressBars.length > 0) {
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");

    gsap.to(bar, {
      width: value + "%",
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
      },
    });
  });
}

// Hover micro animation for project cards
document.querySelectorAll(".project-advanced-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.02, duration: 0.2 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.2 });
  });
});

