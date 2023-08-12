class AsideCategory {
  _asideCategoriesContainer = document.querySelector(
    ".aside__categories-container"
  );

  _asideCategoriesMenu = document.querySelector(".aside__categories-menu");

  _header;
  _item;

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
    this._header = e.target.closest(".aside__categories-header");

    if (!this._header) return;

    document
      .querySelector(".aside__categories-menu")
      .classList.toggle("aside__categories-menu--active");

    this._header.classList.toggle("aside__categories-header--active");
  }

  _openSideCategoryMenus(e) {
    this._item = e.target.closest(".aside__categories-item-title");

    if (!this._item) return;

    this._item.classList.toggle("aside__categories-item-title--active");
  }
}

export default new AsideCategory();
