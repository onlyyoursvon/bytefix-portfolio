const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}


const serviceSelect = document.querySelector("#service");
const otherServiceField = document.querySelector("#otherServiceField");
const otherServiceInput = document.querySelector("#otherService");

function updateOtherServiceField() {
  if (!serviceSelect || !otherServiceField || !otherServiceInput) return;

  const needsOtherDetails = serviceSelect.value === "Other";
  otherServiceField.hidden = !needsOtherDetails;
  otherServiceInput.required = needsOtherDetails;

  if (!needsOtherDetails) {
    otherServiceInput.value = "";
  }
}

if (serviceSelect) {
  serviceSelect.addEventListener("change", updateOtherServiceField);
  updateOtherServiceField();
}

const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    // This is a portfolio demo. Do not collect or send visitor information.
    if (formNote) {
      formNote.textContent = "Thanks for testing the demo. No information was sent or saved because this form is not connected to a backend.";
      formNote.setAttribute("role", "status");
    }
    contactForm.reset();
    updateOtherServiceField();
  });
}
