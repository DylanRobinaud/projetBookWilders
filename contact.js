const contact = document.getElementById("recruitmentform");
contact.addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.sendForm("service_zjs9223", "template_ygcizvt", event.target).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
