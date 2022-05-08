import HomePage from "./components/home";
import MenuPage from "./components/menu";
import AboutPage from "./components/about";

const content = document.getElementById("content");
const homeNav = document.querySelector(".home-nav");
const menuNav = document.querySelector(".menu-nav");
const aboutNav = document.querySelector(".about-nav");
const homePageDisplay = new HomePage("My Restaurant");
const menuPageDisplay = new MenuPage("Restaurant Menu");
const aboutPageDisplay = new AboutPage("About Us");

const switchPage = (page) => {
  content.textContent = page.header;
}

homeNav.addEventListener("click", () => {
  switchPage(homePageDisplay);
});

menuNav.addEventListener("click", () => {
  switchPage(menuPageDisplay);
});

aboutNav.addEventListener("click", () => {
  switchPage(aboutPageDisplay);
});