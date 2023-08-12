class PrimaryCategory {
  _primaryCategoryContainer = document.querySelector(".primary__category");

  _subCategories =
    this._primaryCategoryContainer.querySelectorAll(".sub__category");

  _categoryItems = this._primaryCategoryContainer.querySelectorAll(
    ".primary__category--item"
  );

  _item;
  _catItem;

  constructor() {
    this._primaryCategoryContainer.addEventListener(
      "click",
      this._toggleCategory.bind(this)
    );

    document.addEventListener("click", this._hideSubCategory.bind(this));
  }

  _toggleCategory(e) {
    this._activeCategory(e);

    this._item = e.target.closest(".primary__category--item");

    if (!this._item) return;

    this._categoryHandler(this._item);
  }

  _categoryHandler(item) {
    this._subCategories.forEach((category) => {
      if (
        category.classList.contains("sub__category--active") &&
        item.dataset.category === category.dataset.category
      ) {
        item.classList.remove("primary__category--item-active");
      }

      if (item.dataset.category === category.dataset.category) {
        category.classList.toggle("sub__category--active");
      }

      if (item.dataset.category !== category.dataset.category) {
        category.classList.remove("sub__category--active");
      }
    });
  }

  _removeActiveCategoryItem() {
    this._categoryItems.forEach((cat) => {
      cat.classList.remove("primary__category--item-active");
    });
  }

  _activeCategory(e) {
    this._catItem = e.target.closest(".primary__category--item");

    if (!this._catItem) return;

    this._removeActiveCategoryItem();

    this._catItem.classList.add("primary__category--item-active");
  }

  _hideSubCategory(e) {
    if (!this._primaryCategoryContainer.contains(e.target)) {
      this._subCategories.forEach((subCat) => {
        subCat.classList.remove("sub__category--active");
      });

      this._removeActiveCategoryItem();
    }
  }
}

export default new PrimaryCategory();
