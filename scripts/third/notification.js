import icons from "url:../../src/img/icons.svg";

class Notification {
  _wishlistIcon = document.querySelector(".wishlist-icon");
  _compareIcon = document.querySelector(".compare-icon");

  _closeIcons = document.querySelectorAll(".popup__close");

  _comparePopup = document.querySelector(".compare__popup");
  _wishlistPopup = document.querySelector(".wishlist__popup");
  _compareProductsContainer = document.querySelector(
    ".compare__products--container"
  );
  _wishlistProductsContainer = document.querySelector(
    ".wishlist__products--container"
  );

  _productImgSrc = document.querySelector(".store__card-img").src;

  _messageElement = document.querySelector(".popup__message");

  _removeBtn;

  _src;

  _popupProduct;

  _popupProductImages;

  _items;

  _timeout;

  constructor() {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        this._getItemsFromLS(
          "compareItems",
          "compare__img",
          this._compareProductsContainer
        );
        this._getItemsFromLS(
          "wishlistItems",
          "wishlist__img",
          this._wishlistProductsContainer
        );

        this._changeIconColor("compareItems", this._compareIcon, "compared");
        this._changeIconColor(
          "wishlistItems",
          this._wishlistIcon,
          "wishlisted"
        );
      }.bind(this)
    );

    this._wishlistPopup.addEventListener(
      "click",
      function (e) {
        this._removeBtn = e.target.closest("svg");
        if (!this._removeBtn) return;
        this._src = this._removeBtn.previousElementSibling.src;
        this._removeElement(this._removeBtn, this._wishlistIcon, "wishlisted");
        this._removeItemFromLS("wishlistItems", this._src);
      }.bind(this)
    );

    this._comparePopup.addEventListener(
      "click",
      function (e) {
        this._removeBtn = e.target.closest("svg");
        if (!this._removeBtn) return;
        this._src = this._removeBtn.previousElementSibling.src;
        this._removeElement(this._removeBtn, this._compareIcon, "compared");

        this._removeItemFromLS("compareItems", this._src);
      }.bind(this)
    );

    this._wishlistIcon.addEventListener(
      "click",
      function () {
        this._wishlistIcon.classList.add("wishlisted");
        this._wishlistPopup.classList.add("popup--active");

        this._popupPositioner(this._comparePopup, this._wishlistPopup);

        this._showMessage("Item added successfully!", "success");
        this._createPopupElements(
          "wishlist__img",
          this._wishlistProductsContainer,
          this._productImgSrc
        );
      }.bind(this)
    );

    this._compareIcon.addEventListener(
      "click",
      function () {
        this._compareIcon.classList.add("compared");
        this._comparePopup.classList.add("popup--active");

        this._popupPositioner(this._wishlistPopup, this._wishlistPopup);

        this._showMessage("Item added successfully!", "success");
        this._createPopupElements(
          "compare__img",
          this._compareProductsContainer,
          this._productImgSrc
        );
      }.bind(this)
    );

    this._closeIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        if (e.target.classList.contains("wishlist__popup--close")) {
          this._wishlistPopup.classList.remove("popup--active");
        }

        if (e.target.classList.contains("compare__popup--close")) {
          this._comparePopup.classList.remove("popup--active");
        }
      });
    });
  }

  _createPopupElements(imgClassName, container, src) {
    this._popupProduct = document.createElement("div");
    this._popupProduct.classList.add("popup__product");

    this._popupProductImages = document.querySelectorAll(`.${imgClassName}`);

    if (container.childElementCount >= 4) {
      this._showMessage("Maximum amount of items reached!", "error");
      return;
    }

    for (let i = 0; i < this._popupProductImages.length; i++) {
      if (this._popupProductImages[i].src === this._productImgSrc) {
        this._showMessage("Item already added!", "error");
        return;
      }
    }

    this._popupProduct.innerHTML = `
        <img class="${imgClassName}" src="${src}" alt="" />
        <svg>
           <use xlink:href="${icons}#xMark"></use>
        </svg>
  `;

    if (
      imgClassName === "wishlist__img" &&
      !localStorage.getItem("wishlistItems")?.includes(this._productImgSrc)
    )
      this._saveItemToLS("wishlistItems", this._productImgSrc);

    if (
      imgClassName === "compare__img" &&
      !localStorage.getItem("compareItems")?.includes(this._productImgSrc)
    )
      this._saveItemToLS("compareItems", this._productImgSrc);
    container.appendChild(this._popupProduct);
  }

  _createElementsOnLoad(imgClassName, container, src) {
    this._popupProduct = document.createElement("div");
    this._popupProduct.classList.add("popup__product");
    this._popupProduct.innerHTML = `
  <img class="${imgClassName}" src="${src}" alt="" />
  <svg>
  <use xlink:href="${icons}#xMark"></use>
  </svg>
  `;
    container.appendChild(this._popupProduct);
  }

  _removeElement(element, eventElement, className) {
    element.parentElement.remove();
    this._showMessage("Item removed successfully!", "success");
    if (element.previousElementSibling.src === this._productImgSrc) {
      eventElement.classList.remove(className);
    }
  }

  _popupPositioner(popup, secondPopup) {
    if (!popup.classList.contains("popup--active"))
      secondPopup.style.bottom = "3rem";
    else secondPopup.style.bottom = "18rem";
  }

  _saveItemToLS(LSItemName, item) {
    if (localStorage.getItem(LSItemName) === null) {
      this._items = [];
    } else {
      this._items = JSON.parse(localStorage.getItem(LSItemName));
    }
    this._items.push(item);
    localStorage.setItem(LSItemName, JSON.stringify(this._items));
  }

  _removeItemFromLS(LSItemName, item) {
    if (localStorage.getItem(LSItemName) === null) {
      this._items = [];
    } else {
      this._items = JSON.parse(localStorage.getItem(LSItemName));
    }

    this._items.splice(this._items.indexOf(item), 1);
    localStorage.setItem(LSItemName, JSON.stringify(this._items));
  }

  _getItemsFromLS(LSItemName, imgClassName, container) {
    if (localStorage.getItem(LSItemName) === null) {
      this._items = [];
    } else {
      this._items = JSON.parse(localStorage.getItem(LSItemName));
    }

    this._items.forEach((item) => {
      this._createElementsOnLoad(imgClassName, container, item);
    });
  }

  _changeIconColor(LSItemName, icon, className) {
    this._items = JSON.parse(localStorage.getItem(LSItemName));
    if (!this._items) return;
    this._items.some((item) => {
      if (item === this._productImgSrc) {
        icon.classList.add(className);
      }
    });
  }

  _showMessage(msg, className) {
    this._messageElement.classList.add("message--active");
    this._messageElement.className = "popup__message message--active";
    this._messageElement.classList.add(className);
    this._messageElement.innerText = msg;

    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      this._messageElement.classList.remove("message--active");
    }, 2000);
  }
}

export default new Notification();
