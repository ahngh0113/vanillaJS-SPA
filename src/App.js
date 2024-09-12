import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./apis/photos.js";

export default function App($app) {
  this.state = {
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: {
      currentTab: this.state.currentTab,
    },
    onClick: async (name) => {
      history.pushState(null, `${name} - Photos`, name);
      this.updateContent(name);
    },
  });
  const content = new Content({
    $app,
    initialState: {
      photos: this.state.photos,
    },
  });

  this.setState = (newState) => {
    this.state = newState;

    tabBar.setState({ currentTab: this.state.currentTab });
    content.setState({ photos: this.state.photos });
  };

  this.updateContent = async (tabName) => {
    try {
      const currentTab = tabName;
      const photos = await request(currentTab);

      this.setState({
        ...this.state,
        currentTab: tabName,
        photos: photos,
      });
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  window.addEventListener("popstate", async () => {
    const tabName = window.location.pathname.replace("/", "") || all;
    this.updateContent(tabName);
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
