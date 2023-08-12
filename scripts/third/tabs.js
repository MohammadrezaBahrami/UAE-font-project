class Tabs {
  _tabs = document.querySelectorAll(".tab");
  _tabsContainer = document.querySelector(".other__stores-tabs-container");
  _tabsContent = document.querySelectorAll(".tab__content");
  _clickedTab;

  constructor() {
    this._tabsContainer.addEventListener(
      "click",
      this._changeActiveTab.bind(this)
    );
  }
  _removeActiveTab() {
    this._tabs.forEach((tab) => tab.classList.remove("tab--active"));
  }

  _removeActiveTabContent() {
    this._tabsContent.forEach((tabContent) =>
      tabContent.classList.remove("content--active")
    );
  }

  _changeActiveTab(e) {
    this._clickedTab = e.target.closest(".tab");

    if (!this._clickedTab) return;

    this._removeActiveTab();
    this._clickedTab.classList.add("tab--active");

    this._removeActiveTabContent();

    document
      .querySelector(`.tab__content--${this._clickedTab.dataset.tab}`)
      .classList.add("content--active");
  }
}

export default new Tabs();
