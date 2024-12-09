// questionData.forEach(function(el, index) {
//     document.querySelector(".QSec").innerHTML+=`
//     <button class="question" onclick="showAnswer(${index})">${el.question}</button>
//     <div class="answer">${el.answer}</div>
//     `;})



// function showAnswer(questionNumber) {
//   var answerElement = document.querySelectorAll('.answer')[questionNumber];
//   if (answerElement.style.display === "none") {
//     answerElement.style.display = "block";
//   } else {
//     answerElement.style.display = "none";
//   }
// }
















let userNameS = document.querySelector("#userNameS");
// let passwordS = document.querySelector("#passwordS");
// let userNameL = document.querySelector("#userNameL");
// let passwordL = document.querySelector("#passwordL");

// let db = JSON.parse(localStorage.getItem("users"));
// // console.log(db)

// function toSignUp() {
//   let userInfo = {
//     userName: userNameS.value,
//     password: passwordS.value,
//   };
   
//   let userName = userNameS.value;
//   let userPassword = passwordS.value;
//   let checkUser = db.users.find((user) => {
//     return user.userName == userName && user.password == userPassword;
//   });
//   if (checkUser == undefined) {
//     db.users.push(userInfo);
//     localStorage.setItem("users", JSON.stringify(db));
//   } else {
//     alert("You already have an account");
//   }
// }

// function toLogIn() {
//   let userName = userNameL.value;
//   let userPassword = passwordL.value;
//   let check = db.users.find((user) => {
//     return user.userName == userName && user.password == userPassword;
//   });
//   if (check == undefined) {
//     alert("You dont have an account,please sign up.");
//   } else {
//     window.location.href = "./home";
//   }
// }
