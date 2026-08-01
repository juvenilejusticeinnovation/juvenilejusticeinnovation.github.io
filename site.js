document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(contactForm);
    const name = String(form.get("name") || "").trim();
    const organization = String(form.get("organization") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "Website inquiry").trim();
    const message = String(form.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Organization: ${organization || "Not provided"}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:info@juvenilejusticeinnovation.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
