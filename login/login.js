// toggle between dark and light mode
const body = document.querySelector('body');
const toggle = document.getElementById('toggleMode');
const toggleParagraph = document.getElementById('toggle-paragraph');

// Dark Mode and Light Mode
toggle.addEventListener("click", function () {
    toggle.classList.toggle("bi-moon");
    if (toggle.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "0.5s";
        document.querySelector("#user-login").style.color = "black";
        document.querySelector("#login-password").style.color = "black";
    } else {
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "0.5s";
        document.querySelector("#apple-login-btn").style.border = "1px solid #878787";
        document.querySelector("#google-login-btn").style.border = "1px solid #878787";
        document.querySelector("#phone-login-btn").style.border = "1px solid #878787";
        document.querySelector("#spotify-login-btn").style.border = "1px solid #878787";
        document.querySelector("#user-login").style.border = "1px solid #878787";
        document.querySelector("#user-login").style.color = "white";
        document.querySelector("#password-elements").style.border = "1px solid #878787";
        document.querySelector("#login-password").style.color = "white";
        document.querySelector("#eye-icon").style.color = "red";
    }
});

// Changing dark mode light mode title
toggle.onclick = () => {
    if (toggleParagraph.textContent === "Toggle Dark Mode") {
        toggleParagraph.textContent = "Toggle Light Mode"
        toggleParagraph.style.display = "block"
    }
    else {
        toggleParagraph.textContent = "Toggle Dark Mode"
        toggleParagraph.style.display = "block"
    }
}

// Showing dark mode light mode title on hover
toggle.addEventListener("mouseover", () => {
    toggleParagraph.style.display = "block";
});

// Hiding dark mode light mode title on mouseout
toggle.addEventListener("mouseout", () => {
    setTimeout(function () {
        toggleParagraph.style.display = "none";
    }, 0.01 * 1000);
});


// validate user id and password:
function userValidator(){
    const userLogin = document.getElementById("user-login").value;
    const loginPassword = document.getElementById("login-password").value;
    const validationMessageEl = document.getElementById("validationMessage-el");
    var userEmail = "deep84chaudhary@gmail.com";
    var userPassword = "Deep@K123";

    if(userLogin === userEmail && loginPassword === userPassword){
        window.open("../home/index.html", "_self");
    }
    else{
        validationMessageEl.textContent = "Incorrect username or password.";
        validationMessageEl.style.backgroundColor = "red";
        validationMessageEl.style.color = "#ffffff";
        validationMessageEl.style.width = "30rem";
        validationMessageEl.style.padding = "15px 15px";
        validationMessageEl.style.margin = "15px 0px";
        validationMessageEl.style.fontSize = "15px";
    }
}

const loginBtn = document.getElementById("login-btn");
loginBtn.onclick = ()=>{
    userValidator();
}

// Password Show Hide icon toggle

let eyeIcon = document.getElementById("eye-icon");
const loginPassword = document.getElementById("login-password")

eyeIcon.onclick = ()=>{
    console.log("click");
    if(loginPassword.type =="password"){
        loginPassword.type = "text";
        eyeIcon.classList.add("fa-eye")
        eyeIcon.classList.remove("fa-eye-slash")
        eyeIcon.style.color = "green"
    }
    else {
        loginPassword.type = "password"
        eyeIcon.classList.remove("fa-eye")
        eyeIcon.classList.add("fa-eye-slash")
        eyeIcon.style.color = "red"
    }
}