export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";

  $app.appendChild(this.$target);

  this.template = () => {
    return `
      <div id="all">전체</div>
      <div id="penguin">펭귄</div>
      <div id="koala">코알라</div>
      <div id="panda">판다</div>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const $currentTab = document.getElementById(this.state.currentTab || "all");
    $currentTab ? ($currentTab.className = "clicked") : "";

    const $tabs = document.querySelectorAll(".tab-bar div");

    $tabs.forEach((el) => {
      el.addEventListener("click", () => {
        onClick(el.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };

  this.render();
}
