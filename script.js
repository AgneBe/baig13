const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

function showTab(e, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("active");
  }

  document.getElementById(id).style.display = "block";

  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 0);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected-button");
  }
  
  e.currentTarget.classList.add("selected-button");
};

const swiper = new Swiper("#swiper-container", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    700: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },

});

const burger = document.querySelector("#burger");
const links = document.querySelector(".links");
const anchors = links.querySelectorAll("a");
const sections = document.querySelectorAll("section");

burger.addEventListener("click", function () {
  burger.classList.toggle("rotate");
  links.classList.toggle("show-nav");
});


for (const a of anchors) {
  a.addEventListener("click", function () {
    burger.classList.remove("rotate");
    links.classList.remove("show-nav");
  });
}

window.addEventListener("scroll", function () {
  let activeSectionId;

  for (const section of sections) {
    if (window.scrollY > section.offsetTop - 300) {
      activeSectionId = section.id;

      section.style.opacity = 1;
    }

    for (const a of anchors) {
      a.classList.remove("active");
      if ("#" + activeSectionId === a.getAttribute("href")) {
        a.classList.add("active");
      }
    }
  }
});

for (const section of sections) {
  section.style.opacity = 0;
  section.style.transition = "0.5s";
}

setTimeout(() => {
  anchors[0].classList.add("active");
  sections[0].style.opacity = 1;
}, 0);

const fname = document.querySelector("#fname");
const lname = document.getElementById("lname").value;
const pnumber = document.getElementById("number").value;

if ((fname == "") || (fname == null)){
  alert("1Please fill your form first" + fname + "boop");
}
else if ((lname == "")  || (lname == null)){
  alert("2Please fill your form first");
}
else if ((pnumber === "")  || (pnumber == null)){
  alert("3Please fill your form first");
}
else {
  alert("Your form has submitted sucessfully");
}
