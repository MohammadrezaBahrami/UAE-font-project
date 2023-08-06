class AsideCategory {
  _asideCategoriesContainer = document.querySelector(
    ".aside__categories-container"
  );

  _asideCategoriesMenu = document.querySelector(".aside__categories-menu");

  constructor() {
    this._asideCategoriesContainer.addEventListener(
      "click",
      this._openSideCategory.bind(this)
    );

    this._asideCategoriesMenu.addEventListener(
      "click",
      this._openSideCategoryMenus.bind(this)
    );
  }

  _openSideCategory(e) {
    const header = e.target.closest(".aside__categories-header");

    if (!header) return;

    document
      .querySelector(".aside__categories-menu")
      .classList.toggle("aside__categories-menu--active");

    header.classList.toggle("aside__categories-header--active");
  }

  _openSideCategoryMenus(e) {
    const item = e.target.closest(".aside__categories-item-title");

    if (!item) return;

    item.classList.toggle("aside__categories-item-title--active");
  }
}

export default new AsideCategory();
