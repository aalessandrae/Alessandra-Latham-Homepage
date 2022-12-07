const SendEmailButton = document.querySelector(#emailbutton)

SendEmailButton.addEventListener("click", () => SendEmail());

const SendEmail = () => {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "23b7fea21ee3f3",
        Password : "53f4f55cfa3bf7",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}

