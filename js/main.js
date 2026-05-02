document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const forms = document.querySelectorAll("form[data-demo-form]");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-message");
      if (msg) {
        msg.textContent = "Thank you. Your request has been captured. We will reply within 24 hours.";
      }
      form.reset();
    });
  });
});
