const dropdown = document.querySelector(".dropdown");

function hamburg() {
    dropdown.classList.add("active");
    document.body.style.overflow = "hidden";
}

function cancel() {
    dropdown.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Auto close when clicking link
document.querySelectorAll(".dropdown .links a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

const EMAILJS_PUBLIC_KEY = "UyqFkxY9no9_cJlro";
const EMAILJS_SERVICE_ID = "service_whl3sso";
const EMAILJS_TEMPLATE_ID = "template_7qg1pob";

emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  });
}
