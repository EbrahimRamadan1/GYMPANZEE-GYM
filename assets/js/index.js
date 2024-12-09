const navBar = document.querySelector("nav");
const bars = document.querySelector(".navIcon");
const bem = document.querySelector(".bem");
const fnameFromInput = document.getElementById("fnameFromInput");
const snameFromInput = document.getElementById("snameFromInput");
const emailFromInput = document.getElementById("emailFromInput");
const mobileFromInput = document.getElementById("mobileFromInput");
let localDb = JSON.parse(localStorage.getItem("db"));
console.log(localDb);
let data = {};
// let localDb = {
//   users : []
// }
// localStorage.setItem('db' , JSON.stringify(localDb));
// // console.log(db.users)
// let sessionDb = {
//   bmi: "-",
//   firstName: "-",
//   secondName: "-",
//   email: "-",
//   phona: "-",
//   package: "-",
// };
// sessionStorage.setItem("user", JSON.stringify(sessionDb));
// let userInfo = JSON.parse(sessionStorage.getItem("user"));

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

bars.addEventListener("click", () => {
  document.querySelector(".navLinks").classList.add("d_noneL");
  document.querySelector(".aside").classList.remove("d_noneL");
  document.querySelector(".aside").classList.remove("d_noneM");
  document.querySelector(".aside").classList.remove("d_noneT");
  document.querySelector(".aside").style.display = "flex !important";
});

function closeSideBar() {
  document.querySelector(".aside").classList.add("d_noneL");
  document.querySelector(".aside").classList.add("d_noneM");
  document.querySelector(".aside").classList.add("d_noneT");
  document.querySelector(".navLinks").classList.remove("d_noneL");
}

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    navBar.classList.remove("animate__fadeInUp");
    navBar.classList.add("animate__fadeInDown");
    navBar.classList.add("navScroll");
  } else {
    navBar.classList.remove("animate__fadeInDown");
    navBar.classList.add("animate__fadeInUp");
    navBar.classList.remove("navScroll");
  }
});

function openBme() {
  document.querySelector(".bem").style.display = "flex";
}

function closeBem() {
  document.querySelector(".bem").style.display = "none";
}

function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var bmi;

  if (weight > 0 && height > 0) {
    bmi = weight / Math.pow(height / 100, 2);
    let bmiT = bmi;
    if (bmiT < 18.5) {
      document.getElementById("Underweight").classList.add("bmiTr");
    } else if (bmiT > 18.5 && bmiT < 24.9) {
      document.getElementById("Normal").classList.add("bmiTr");
    } else if (bmiT > 25 && bmiT < 29.9) {
      document.getElementById("Pre").classList.add("bmiTr");
    } else if (bmiT > 30 && bmiT < 34.9) {
      document.getElementById("class|").classList.add("bmiTr");
    } else if (bmiT > 35 && bmiT < 39.9) {
      document.getElementById("class||").classList.add("bmiTr");
    } else if (bmiT > 40) {
      document.getElementById("class|||").classList.add("bmiTr");
    }
    data.Bmi = `${bmiT.toFixed(2)}`;
    sendToLocalStorage(data);
    // let userInfo = JSON.parse(sessionStorage.getItem("user"));
    // userInfo.bmi = `${bmiT.toFixed(2)}`;
    // sendToLocalStorage(userInfo)
  } else {
    alertErr();
    return;
  }

  document.getElementById("result").innerHTML = "BMI: " + bmi.toFixed(2);
}

function sendData(event) {
  event.preventDefault();
  if (
    fnameFromInput.value == "" ||
    fnameFromInput.value == null ||
    snameFromInput.value == "" ||
    snameFromInput.value == null ||
    emailFromInput.value == "" ||
    emailFromInput.value == null ||
    mobileFromInput.value == "" ||
    mobileFromInput.value == null
  ) {
    alertErr();
  } else {
    let check = localDb.users.find((e) => {
      return (
        e.email == emailFromInput.value || e.phona == mobileFromInput.value
      );
    });
    if (check == undefined) {
      // console.log(userInfo);
      data.firstName = fnameFromInput.value;
      data.secondName = snameFromInput.value;
      data.email = emailFromInput.value;
      data.phona = mobileFromInput.value;
      localStorage.setItem("db", JSON.stringify(data));
      // sendToSession(data);
      // sessionStorage.setItem("user", JSON.stringify(userInfo));
      // sendToLocalStorage(userInfo);
      document.querySelector("form").classList.add("d_noneL");
      document.querySelector("form").classList.add("d_noneT");
      document.querySelector("form").classList.add("d_noneM");
      alertDone();
    } else {
      alertExist();
    }
  }
}
function sendToLocalStorage(el,type) {
  let isFound = localDb.users.find((userCheck) => {
    return (userCheck.email == el.email);
  });
  if (isFound) {
    localDb.users.pop();
    el.package = `${type}`
    localDb.users.push(el);
    localStorage.setItem("db",JSON.stringify(localDb));
  }else{
    window.scrollTo(0,3000);
  }
}

function alertErr() {
  Swal.fire({
    // title: "The Internet?",
    text: "Please enter valid values.",
    icon: "warning",
  });
}
function alertExist() {
  Swal.fire({
    // title: "The Internet?",
    text: "You have already register.",
    icon: "warning",
  });
}

function alertDone() {
  Swal.fire({
    // title: "The Internet?",
    text: "Success",
    icon: "success",
  });
}
function basic() {
  data.package = "basic";
  sendToLocalStorage(data,basic);
  // sendToSession(data);
  disapearSec5();
}
function standard() {
  data.package = "standard";
  // sendToSession(data);
  disapearSec5();
}
function premium() {
  data.package = "premium";
  // sendToLocalStorage(data);
  disapearSec5();
}

function disapearSec5() {
  document.querySelector(".sec5").classList.add("d_noneL");
  document.querySelector(".sec5").classList.add("d_noneM");
  document.querySelector(".sec5").classList.add("d_noneT");
}

// function sendToSession(el) {
//   // console.log(el);
//   sessionStorage.setItem("userData",JSON.stringify(el))
// }

// function sendToLocalStorage(el) {
//   let isFound = localDb.users.find((user) => {
//     return user.email == el.email;
//   });
//   if (isFound) {
//     console.log(isFound);
//   }
// }

// if (window.location.href != '../../index.html'){
//   let sStorage = JSON.parse(sessionStorage.getItem('userData'));
//   let isFound = localDb.users.find((el)=>{
//     return el.email == sStorage.email
//   })
//   if (!isFound){
//     localDb.users.push(sStorage);
//   }
// }

