const contact = document.getElementById("recruitmentform");
contact.addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.sendForm("service_zjs9223", "template_ygcizvt", event.target).then(
    () => {
      console.log("SUCCESS!");
      const successMessage = document.createElement("p");
      successMessage.textContent = "Le formulaire a été envoyé avec succès!";
      successMessage.classList.add("success-message");
      contact.appendChild(successMessage);
      setTimeout(() => {
        successMessage.remove();
        contact.reset();
      }, 2000);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
