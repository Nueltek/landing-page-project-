// Mobile menu with scroll lock
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

mobileToggle.addEventListener("click", function () {
  const isActive = navLinks.classList.toggle("active");
  this.classList.toggle("active");

  // Lock/unlock body scroll
  if (isActive) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

// Close menu on link click with smooth transition
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileToggle.classList.remove("active");
    body.style.overflow = "";
  });
});

// Enhanced navbar scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-wrapper");
  const stickyCta = document.querySelector(".sticky-cta");
  const currentScroll = window.pageYOffset;

  // Add/remove scrolled class
  if (currentScroll > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // Show/hide sticky CTA
  if (currentScroll > 800) {
    stickyCta.classList.add("show");
  } else {
    stickyCta.classList.remove("show");
  }

  lastScroll = currentScroll;
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".nav-wrapper").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Enhanced fade-in animation with stagger
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Portfolio filters
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Pricing buttons
document.querySelectorAll(".pricing-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission with better feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading state
  const submitBtn = this.querySelector(".form-submit");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    alert(
      "Thank you for your request! We'll contact you within 2 hours.\n\nFor immediate emergency service, call (512) 555-0299"
    );
    this.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1000);
});

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    mobileToggle.classList.remove("active");
    body.style.overflow = "";
  }
});

// Add parallax effect to hero overlay on scroll (mobile only)
window.addEventListener("scroll", () => {
  const heroOverlay = document.querySelector(".hero-overlay");
  if (heroOverlay && window.innerWidth <= 768) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    heroOverlay.style.transform = `translateY(${rate}px)`;
  } else if (heroOverlay) {
    heroOverlay.style.transform = "translateY(0)";
  }
});
