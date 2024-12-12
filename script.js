// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let hiremeBtn = document.getElementById("hiremeBtn");
let letchatBtn = document.getElementById("letchatBtn");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Btn Works ***
hiremeBtn.onclick = function () {
    window.open( 'https://google.com' , '_blank',);
  };

letchatBtn.onclick = function () {
    window.open( 'https://wa.me/+8801317532453/?text=Hey%20There%21' , '_blank',);
  };


// Function to get the referrer domain
function getReferrerDomain() {
    const referrer = document.referrer; // Get the referrer URL
    if (referrer) {
        try {
            const referrerURL = new URL(referrer);
            return referrerURL.hostname; // Extract the domain name
        } catch (error) {
            console.error("Invalid referrer :", error);
            return null;
        }
    } else {
        console.log("No referrer available.");
        return null;
    }
}

// Display the referrer domain in the console
const referrerDomain = getReferrerDomain();
if (referrerDomain) {
    console.log("Referrer By:", referrerDomain);
} else {
    console.log("No referrer could be determined.");
}
