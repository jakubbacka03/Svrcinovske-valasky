function sendMail(event) {
    event.preventDefault();

    let parms = {
        name: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("valasky", "template_ca4lgon", parms)
        .then(() => {
            document.getElementById("formStatus").innerText = "Email bol úspešne odoslaný!";
            document.getElementById("formStatus").style.color = "lightgreen";
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            document.getElementById("formStatus").innerText = "Nastala chyba pri odosielaní.";
            document.getElementById("formStatus").style.color = "red";
            console.error("EmailJS error:", error);
        });
}
