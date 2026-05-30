const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const interest = data.get("interest") || "General inquiry";
    const message = data.get("message") || "";
    const subject = encodeURIComponent(`Signal Flag Outdoors inquiry: ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:hello@signalflagoutdoors.com?subject=${subject}&body=${body}`;
  });
}
