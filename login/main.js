let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function () {
    signIn.classList.add("active");
    signUp.classList.add("inActive");

}
btnSignUp.onclick = function () {
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");

}