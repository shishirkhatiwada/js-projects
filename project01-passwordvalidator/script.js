const passwordInput = document.querySelector(".password-field input");
const eyeIcons = document.querySelectorAll(".password-field i.fa-eye");
const requirementList = document.querySelectorAll(".requierments li");


const requirements = [
    { regex: /.{8}/, index: 0 }, //minimum 8 characters
    { regex: /[0-9]/, index: 1 }, //at least one number 
    { regex: /[a-z]/, index: 2 }, // smaller letter 
    { regex: /[A-Z]/, index: 3 }, //uppercase
    { regex: /[^A-Za-z0-9]/, index: 4 } //special character
]

const updateRequirementIcon = (index, isValid) => {
    const requirementItem = requirementList[index];
    const icon = requirementItem.querySelector("i");

    if (isValid) {
        icon.className = "fa-solid fa-check";
        requirementItem.classList.add("fade");
    } else {
        icon.className = "fa-solid fa-circle";
        requirementItem.classList.remove("fade");
    }
}

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach((item) => {
        const isValid = item.regex.test(e.target.value);
        updateRequirementIcon(item.index, isValid);
    });
});


eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
       
        //show and unshow slash 

    eyeIcon.className = `fa-solid fa-eye${passwordInput === "password" ? "" : "-slash"}`

    });

   
});
