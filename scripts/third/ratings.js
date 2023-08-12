class Ratings {
  _starsTotal = 5;
  _averageRating;
  _starPercentage;
  _starPercentageRounded;
  _starsWrapper = document.querySelector(".stars");
  _star;
  _id;
  _stars = document.querySelectorAll(".stars span");

  constructor() {
    document.addEventListener("DOMContentLoaded", this._getRatings.bind(this));
    this._starsWrapper.addEventListener("click", this._rate.bind(this));
  }

  _rate(e) {
    this._star = e.target.closest(".stars span");
    if (!this._star) return;
    this._starsWrapper.classList.add("disabled-stars");

    this._id = this._star.dataset.id;

    this._stars.forEach((star, index) => {
      if (index <= this._id) {
        star.classList.add("active-star");
      }
    });
  }

  _getRatings() {
    this._averageRating = document
      .querySelector(".number-rating")
      .getAttribute("data-rating");

    this._starPercentage = (this._averageRating / this._starsTotal) * 100;

    // round number
    this._starPercentageRounded = `${
      Math.round(this._starPercentage / 10) * 10
    }%`;

    // set width of stars inner to percentage
    document.querySelector(".stars-inner").style.width =
      this._starPercentageRounded;

    document.querySelector(".number-rating").textContent = this._averageRating;
  }
}

export default new Ratings();
