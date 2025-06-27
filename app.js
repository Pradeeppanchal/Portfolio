// When window scrolling
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("head-scroll");
  } else {
    header.classList.remove("head-scroll");
  }
});

// When web-page scrolling that to show the id
window.addEventListener("scroll", () => {
  const section = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("#navbar a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("#navbar a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

const upscroll = document.getElementById('up-scroll');
upscroll.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// background-color changing or thems
const changing = document.querySelector("#color-change");
const inputbox = document.querySelectorAll("input");
const textbox = document.querySelector("textarea");
const headName = document.querySelector("h3 a");
const sliderbar = document.querySelector('#navbar');

let mode = "light";
changing.addEventListener("click", () => {
  if (mode === "light") {
    mode = "drak";
    document.body.style.backgroundColor = "#0d1321";
    document.body.style.color = "#fff";
    sliderbar.classList.add('slider-color');
    header.style.backgroundColor = '#0d1321';
    headName.classList.add("toggle");
    navbar.classList.add('navbar-color');
    document.querySelector('#footer-list').classList.add('footer-color');
  } else {
    mode = "light";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#222";
    sliderbar.classList.remove('slider-color');
    header.style.backgroundColor = '#fff';
    headName.classList.remove("toggle");
    navbar.classList.remove('navbar-color')
    document.querySelector('#footer-list').classList.remove('footer-color');
  }
});
// Email receiving const

const yourname = document.querySelector("#your-name");
const youremail = document.querySelector("#your-email");
const yourtext = document.querySelector("#your-message");
// const formbody = ``
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "vkkrashna@gmail.com",
    Password: "760059CF92ACE7BE92780CE52A841E04F951",
    To: "krishnakandgule585@gmail.com",
    From: youremail.value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name : " +
      yourname.value +
      "<br>" +
      "Email :" +
      youremail.value +
      "<br>" +
      "Text : " +
      yourtext.value,
  }).then((message) => alert("Submit sucessful"));
}
// Scroll bar animation by using the scroll bar reveal website

let Scr = ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

// Home page sliding
Scr.reveal(".icons i", { delay: 500, origin: "top" });
Scr.reveal(".details h2, .details h4, .details .para, .details button", {
  delay: 600,
  origin: "bottom",
});
Scr.reveal(".img img", { delay: 600, origin: "top" });
Scr.reveal(".home .down-arrow", { delay: 500, origin: "top" });

//  Heading section the all like about contact project
Scr.reveal(".about-head", { delay: 500, origin: "top" });

// About page sliding
Scr.reveal(".about-img img", { delay: 500, origin: "top" });
Scr.reveal(".information h2, .info, .info-1", { delay: 600, origin: "top" });
Scr.reveal(".information hr", { delay: 700, origin: "bottom" });

// Skills page sliding
// Educations section
Scr.reveal(".h-1 h2, .h-1 p", { delay: 500, origin: "top" });
Scr.reveal(" .h-1 p", { delay: 500, origin: "" });
Scr.reveal(".education button, .education .edu-1", {
  delay: 500,
  origin: "left"
});
Scr.reveal(".education .edu-2", { delay: 600, origin: "top" });
Scr.reveal(".education .edu-3", { delay: 700, origin: "top" });

//Skills section
Scr.reveal(".skill-section button", { delay: 500, origin: "top" });
Scr.reveal(".skill-section .s-html", { delay: 500, origin: "top" });
Scr.reveal(".skill-section .s-css", { delay: 600, origin: "top" });
Scr.reveal(".skill-section .s-js", { delay: 700, origin: "top" });
Scr.reveal(".skill-section .s-react", { delay: 800, origin: "top" });

// Projects section sliding
Scr.reveal(".work .auto-head", { delay: 500, origin: "top" });
Scr.reveal(".github-pro .p-1", { delay: 500, origin: "top" });
Scr.reveal(".github-pro .p-2", { delay: 600, origin: "top" });
Scr.reveal(".github-pro .p-3", { delay: 700, origin: "top" });
Scr.reveal(".github-pro .p-4", { delay: 600, origin: "top" });
Scr.reveal(".github-pro .p-4", { delay: 600, origin: "top" });

//Contact page sliding
Scr.reveal(".contact #your-name", { delay: 500, origin: "top" });
Scr.reveal(".contact #your-email", { delay: 600, origin: "top" });
Scr.reveal(".contact #your-message", { delay: 700, origin: "bottom" });
Scr.reveal(".contact #sub-btn", { delay: 700, origin: "bottom" });


//navigation bar
const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const navbar = document.querySelector('#navbar');

if(bar){
  bar.addEventListener('click', ()=>{
    navbar.classList.add('open');
    console.log(bar);
  });
};
if(close){
  close.addEventListener('click', ()=>{
    navbar.classList.remove('open');
    console.log(close);
  });
};