import "./style.css";
import { initDisplay } from "./components/main";
import { search } from "./components/header";

window.addEventListener("load", () => {
  initDisplay();
  search();
});
