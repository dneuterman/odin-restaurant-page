import HomePage from "./components/home";
import MenuPage from "./components/menu";
import AboutPage from "./components/about";
import "./style.css";

const HOME_PAGE_OBJECT = {
  restaurantTitle: "My Restaurant",
  restaurantSubTitle: "Here to Serve You!",
  restaurantDescription: "We started as a single-shop in the corner of the mall and we have grown into a world-renowned restaurant with over 4000 stores! You won't find food like this any where elese! Come in and enjoy!"
}

const content = document.getElementById("content");
const homeNav = document.querySelector(".home-nav");
const menuNav = document.querySelector(".menu-nav");
const aboutNav = document.querySelector(".about-nav");
const homePageDisplay = new HomePage(HOME_PAGE_OBJECT);
const menuPageDisplay = new MenuPage("Restaurant Menu");
const aboutPageDisplay = new AboutPage("About Us");

const switchPage = (page) => {
  content.append(page.buildPage());
}

homeNav.addEventListener("click", () => {
  switchPage(homePageDisplay);
});

// menuNav.addEventListener("click", () => {
//   switchPage(menuPageDisplay);
// });

// aboutNav.addEventListener("click", () => {
//   switchPage(aboutPageDisplay);
// });