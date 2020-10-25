/** ============================== Toggle menu Navbar =============================== */

let toggleBtn = document.querySelector(".links-container .toggle-menu");

let tLink = document.querySelector(".links-container .links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  toggleBtn.classList.toggle("menu-active");

  // tLink.forEach((ul) => {
  //     ul.classList.toggle("open");
  // });

  // // Toggle Class 'menu-active' On Button
  // this.classList.toggle('menu-active');

  // Toggle Class 'open' On Links
  tLink.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLink) {
    // Check If Menu Is Open

    if (tLink.classList.contains("open")) {
      // Toggle Class 'menu-active' On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class 'open' On Links
      tLink.classList.toggle("open");
    }
  }
});

// Stop Propagation On Menu
tLink.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();
};
$(document).ready(function () {
  // Team Carousel
  $(".team-carousel").owlCarousel({
    items: 2,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    autoWidth: true,
    // margin: 10,
    navText: [
      "<img class='carousel-nav-right' src='imgs/right.svg'>",

      "<img class='carousel-nav-left' src='imgs/left.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });

  // teamStories-carousel

  $(".teamStories-carousel").owlCarousel({
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // autoWidth: true,
    // margin: 10,
    navText: [
      "<img class='carousel-nav-right' src='imgs/mynextimage.png'>",

      "<img class='carousel-nav-left' src='imgs/myprevimage.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });
});
var pageContent = document.getElementById("content"),
  pagecopy = pageContent.cloneNode(true),
  blurryContent = document.getElementById("blurryscroll");
blurryContent.appendChild(pagecopy);
window.onscroll = function () {
  blurryContent.scrollTop = window.pageYOffset;
};

let scrollpos = window.scrollY;
const nav = document.querySelector("nav");
const nav_height = nav.offsetHeight;

const add_class_on_scroll = () => nav.classList.add("nav-scrolled");
const remove_class_on_scroll = () => nav.classList.remove("nav-scrolled");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= nav_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  // console.log(scrollpos);
});
