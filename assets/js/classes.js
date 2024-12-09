const navBar = document.querySelector("nav");
const bars = document.querySelector(".navIcon");
const sec1Nav = document.querySelector(".sec1Nav");
const theadTr = document.querySelector("table thead tr");
const tbody = document.querySelector("table tbody");
const cat = ["ALL", "GYM", "CROSSFIT", " CARDIO", " BODY", "YOGA"];
const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const classesTime = [10, 12, 14, 16, 18, 20];

let clubClasses = [
  {
    name: "GYM",
    classes: [
      {
        timeS: 10.0,
        coach: "Gregory Powers",
        day: "MONDAY",
      },
      {
        timeS: 14.0,
        coach: "Gregory Powers",
        day: "SATURDAY",
      },
      {
        timeS: 16.0,
        coach: "Gregory Powers",
        day: "WEDNESDAY",
      },
      {
        timeS: 16.0,
        coach: "Gregory Powers",
        day: "SUNDAY",
      },
      {
        timeS: 20.0,
        coach: "Gregory Powers",
        day: "TUESDAY",
      },
    ],
  },
  {
    name: "YOGA",
    classes: [
      {
        timeS: 10.0,
        coach: "Walter Wagner",
        day: "WEDNESDAY",
      },
      {
        timeS: 16.0,
        coach: "Walter Wagner",
        day: "FRIDAY",
      },
    ],
  },
  {
    name: "CROSSFIT",
    classes: [
      {
        timeS: 18.0,
        coach: "Patrick Cortez",
        day: "THURSDAY",
      },
      {
        timeS: 20.0,
        coach: "Patrick Cortez",
        day: "SUNDAY",
      },
    ],
  },
  {
    name: " CARDIO",
    classes: [
      {
        timeS: 10.0,
        coach: "Walter Wagner",
        day: "SUNDAY",
      },
      {
        timeS: 16.0,
        coach: "Walter Wagner",
        day: "MONDAY",
      },
      {
        timeS: 18.0,
        coach: "Walter Wagner",
        day: "MONDAY",
      },
      {
        timeS: 20.0,
        coach: "Walter Wagner",
        day: "FRIDAY",
      },
    ],
  },
  {
    name: "BODY",
    classes: [
      {
        timeS: 10.0,
        coach: "Patrick Cortez",
        day: "FRIDAY",
      },
      {
        timeS: 18.0,
        coach: "Patrick Cortez",
        day: "TUESDAY",
      },
      {
        timeS: 20.0,
        coach: "Patrick Cortez",
        day: "WEDNESDAY",
      },
    ],
  },
];

(function () {
  let theadContent = "";
  classesTime.forEach((time) => {
    theadContent += `
      <th><p class="p2 col-12">${time} - ${time + 2}</p></th>
    `;
  });

  theadTr.innerHTML += theadContent;
})();

function renderDays() {
  let tableBody = "";
  days.forEach((day) => {
    tableBody += `
      <tr>
          <th>
              <div class="tDIv col-12">
                  <p class="p3 col-12 text-center">${day}</p>
                  
              </div>
          </th>
      </tr>
    `;
  });
  tbody.innerHTML = tableBody;
}

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

function findWithDay(session) {
  let checkDay = days.find((el) => {
    return el == session.day;
  });
  console.log(checkDay);
}

(function () {
  cat.forEach((el) => {
    sec1Nav.innerHTML += `
      <p class="p2 col-2 cat" onclick='renderTBody("${el}")'>${el}</p>
    `;
  });
})();

function renderTBody(cat) {
  const allClasses = clubClasses.flatMap((club) =>
    club.classes.map((classItem) => ({
      ...classItem,
      name: club.name,
    }))
  );
  if (cat == "ALL" || !cat) {
    tbody.innerHTML = "";
    renderDays();
    const tBodyChildren = [...tbody.children];
    tBodyChildren.forEach((row, rowIndex) => {
      const day = days[rowIndex];
      let rowContent = "";

      classesTime.forEach((time) => {
        const matchingClass = allClasses.find(
          (classData) => classData.day === day && classData.timeS === time
        );

        if (matchingClass) {
          rowContent += `
              <td>
                <div class="tDIv col-12">
                  <p class="p3 col-12 text-center">${matchingClass.name}</p>
                  <p class="p2 col-12 text-center">${matchingClass.timeS} - ${
            matchingClass.timeS + 2
          }</p>
                  <p class="p5 col-12 text-center">${matchingClass.coach}</p>
                </div>
              </td>
            `;
        } else {
          rowContent += `<td></td>`;
        }
      });

      row.innerHTML += rowContent;
    });
  } else {
    tbody.innerHTML = "";
    renderDays();
    const tBodyChildren = [...tbody.children];

    tBodyChildren.forEach((row, rowIndex) => {
      const day = days[rowIndex];
      let rowContent = "";

      classesTime.forEach((time) => {
        const matchingClass = allClasses.find(
          (classData) =>
            classData.day === day &&
            classData.timeS === time &&
            classData.name === cat
        );

        if (matchingClass) {
          rowContent += `
              <td>
                <div class="tDIv col-12">
                  <p class="p3 col-12 text-center">${matchingClass.name}</p>
                  <p class="p2 col-12 text-center">${matchingClass.timeS} - ${
            matchingClass.timeS + 2
          }</p>
                  <p class="p5 col-12 text-center">${matchingClass.coach}</p>
                </div>
              </td>
            `;
        } else {
          rowContent += `<td></td>`;
        }
      });

      row.innerHTML += rowContent;
    });
  }

  // tBodyChildren.forEach((row, rowIndex) => {
  //   const day = days[rowIndex];
  //   let rowContent = "";

  //   if (cat) {
  //     classesTime.forEach((time) => {
  //       const matchingClass = allClasses.find(
  //         (classData) =>
  //           classData.day === day &&
  //           classData.timeS === time &&
  //           classData.name === cat
  //       );

  //       if (matchingClass) {
  //         rowContent += `
  //           <td>
  //             <div class="tDIv col-12">
  //               <p class="p3 col-12 text-center">${matchingClass.name}</p>
  //               <p class="p2 col-12 text-center">${matchingClass.timeS} - ${
  //           matchingClass.timeS + 2
  //         }</p>
  //               <p class="p5 col-12 text-center">${matchingClass.coach}</p>
  //             </div>
  //           </td>
  //         `;
  //       } else {
  //         rowContent += `<td></td>`;
  //       }
  //     });
  //   } else {
  //     classesTime.forEach((time) => {
  //       const matchingClass = allClasses.find(
  //         (classData) => classData.day === day && classData.timeS === time
  //       );

  //       if (matchingClass) {
  //         rowContent += `
  //           <td>
  //             <div class="tDIv col-12">
  //               <p class="p3 col-12 text-center">${matchingClass.name}</p>
  //               <p class="p2 col-12 text-center">${matchingClass.timeS} - ${
  //           matchingClass.timeS + 2
  //         }</p>
  //               <p class="p5 col-12 text-center">${matchingClass.coach}</p>
  //             </div>
  //           </td>
  //         `;
  //       } else {
  //         rowContent += `<td></td>`;
  //       }
  //     });
  //   }

  //   row.innerHTML += rowContent;
  // });
}

function renderTable() {
  renderDays();
  renderTBody();
}

renderTable();

// function tBodyLoop(cat, allClasses) {
//   tbody.innerHTML = "";
//   renderDays();
//   const tBodyChildren = [...tbody.children];
//   tBodyChildren.forEach((row, rowIndex) => {
//     const day = days[rowIndex];
//     let rowContent = "";

//     classesTime.forEach((time) => {
//       const matchingClass = allClasses.find((classData) =>
//         classData.day === day && classData.timeS === time && cat
//           ? classData.cat === cat
//           : null
//       );

//       if (matchingClass) {
//         rowContent += `
//             <td>
//               <div class="tDIv col-12">
//                 <p class="p3 col-12 text-center">${matchingClass.name}</p>
//                 <p class="p2 col-12 text-center">${matchingClass.timeS} - ${
//           matchingClass.timeS + 2
//         }</p>
//                 <p class="p5 col-12 text-center">${matchingClass.coach}</p>
//               </div>
//             </td>
//           `;
//       } else {
//         rowContent += `<td></td>`;
//       }
//     });

//     row.innerHTML += rowContent;
//   });
// }
