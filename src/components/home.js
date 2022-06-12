export default class HomePage {
  constructor({restaurantTitle, restaurantSubTitle, restaurantDescription}) {
    this.restaurantTitle = restaurantTitle;
    this.restaurantSubTitle = restaurantSubTitle;
    this.restaurantDescription = restaurantDescription;
  }

  buildPage() {
    const homePageContainer = document.createElement('div');

    const restaurantTitleContainer = document.createElement('div');
    restaurantTitleContainer.classList.add("restaurant-title-container");

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.classList.add('restaurant-title');
    restaurantTitle.textContent = this.restaurantTitle;

    const restaurantSubTitle = document.createElement('h2');
    restaurantSubTitle.classList.add('restaurant-sub-title');
    restaurantSubTitle.textContent = this.restaurantSubTitle;

    const restaurantDescriptionContainer = document.createElement('div');
    restaurantDescriptionContainer.classList.add('restaurant-description-container');

    const restaurantDescription = document.createElement('h3');
    restaurantDescription.classList.add('restaurant-description');
    restaurantDescription.textContent = this.restaurantDescription;

    restaurantTitleContainer.append(restaurantTitle, restaurantSubTitle);
    restaurantDescriptionContainer.append(restaurantDescription);
    homePageContainer.append(restaurantTitleContainer, restaurantDescriptionContainer);

    return homePageContainer;
  }
}