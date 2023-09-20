const passwordInput = document.querySelector(".password-field input");
const eyeIcons = document.querySelectorAll(".password-field i.fa-eye");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
       
        //show and unshow slash 

    eyeIcon.className = `fa-solid fa-eye${passwordInput === "password" ? "" : "-slash"}`

    });

   
});
