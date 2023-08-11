class Tabs {
  _tabs = document.querySelectorAll(".tab");
  _tabsContainer = document.querySelector(".other__stores-tabs-container");
  _tabsContent = document.querySelectorAll(".tab__content");

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
    const clickedTab = e.target.closest(".tab");

    if (!clickedTab) return;

    this._removeActiveTab();
    clickedTab.classList.add("tab--active");

    this._removeActiveTabContent();

    document
      .querySelector(`.tab__content--${clickedTab.dataset.tab}`)
      .classList.add("content--active");
  }
}

export default new Tabs();
