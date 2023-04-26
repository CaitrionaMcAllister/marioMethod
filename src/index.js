import { Logo } from "@pmndrs/branding";
import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Overlay } from "./Overlay.js";
// import EnterPage from "./Enter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <EnterPage /> */}
    <Overlay />
    <Logo
      style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      color="red"
    />
  </>
);
