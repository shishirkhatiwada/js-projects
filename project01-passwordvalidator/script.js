const passwordInput = document.querySelectorAll(".password-field input")
const eyeIcon = document.querySelectorAll(".password-field i")

eyeIcon.addEventListener("click" ,()=>{
    passwordInput.type = passwordInput.type === "password" ? "text" : "password"
})