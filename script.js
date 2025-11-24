// Scroll Animation Script
document.addEventListener("DOMContentLoaded", function () {
  const heroElements = document.querySelectorAll(
    ".hero .fade-in, .hero .fade-in-up, .hero .scale-in"
  );
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 100 * index);
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".fade-in:not(.hero .fade-in), .fade-in-up:not(.hero .fade-in-up), .slide-in-left, .slide-in-right, .scale-in:not(.hero .scale-in)"
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  const lists = document.querySelectorAll("section ul");
  lists.forEach((list) => {
    const listItems = list.querySelectorAll("li");
    listItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
});
