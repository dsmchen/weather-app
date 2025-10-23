import "./style.css";
import { showLoadingSpinner } from "./components/loading";
import { initDisplay } from "./components/main";
import { search } from "./components/header";

window.addEventListener("load", () => {
  showLoadingSpinner();
  initDisplay();
  search();
});
