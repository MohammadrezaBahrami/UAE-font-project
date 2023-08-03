class Slider {
  _carouselParentEl = document.querySelector(".carousel");
  _carouselImages = document.querySelectorAll(".carousel__img");
  _prevBtn = document.querySelector(".carousel__prev-btn");
  _nextBtn = document.querySelector(".carousel__next-btn");
  _dotsContainer = document.querySelector(".dots");

  _curSlide = 0;
  _maxSlide = this._carouselImages.length;

  constructor() {
    this._carouselImages.forEach(
      (img, i) => (img.style.transform = `translateX(${100 * i}%)`)
    );

    this._createDots();
    this._goToSlide(0);
    this._activateDot(0);

    this._nextBtn.addEventListener("click", this._nextSlide.bind(this));

    this._prevBtn.addEventListener("click", this._prevSlide.bind(this));

    document.addEventListener(
      "keydown",
      function (e) {
        (e.key === "ArrowRight" && this._nextSlide()) ||
          (e.key === "ArrowLeft" && this._prevSlide());
      }.bind(this)
    );

    this._dotsContainer.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("carousel__dot-btn")) {
          const { slide } = e.target.dataset;
          this._goToSlide(slide);
          this._activateDot(slide);
        }
      }.bind(this)
    );
  }

  _activateDot(slide) {
    document
      .querySelectorAll(`.carousel__dot-btn`)
      .forEach((dot) => dot.classList.remove("carousel__dot--active"));

    document
      .querySelector(`.carousel__dot-btn[data-slide="${slide}"]`)
      .classList.add("carousel__dot--active");
  }

  _createDots() {
    this._carouselImages.forEach((_, i) => {
      this._dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="carousel__dot-btn" data-slide="${i}"></button>`
      );
    });
  }

  _goToSlide(slide) {
    this._carouselImages.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  _nextSlide() {
    if (this._curSlide === this._maxSlide - 1) {
      this._curSlide = 0;
    } else {
      this._curSlide++;
    }

    this._goToSlide(this._curSlide);
    this._activateDot(this._curSlide);
  }

  _prevSlide() {
    if (this._curSlide === 0) {
      this._curSlide = this._maxSlide - 1;
    } else {
      this._curSlide--;
    }

    this._goToSlide(this._curSlide);
    this._activateDot(this._curSlide);
  }
}

export default new Slider();
