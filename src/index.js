// import * as THREE from "three";
import { Logo } from "@pmndrs/branding";
// import { Canvas } from "@react-three/fiber";

import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App.js";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="https://pmnd.rs/"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        pmnd.rs
        <br />
        dev collective
      </a>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      >
        C.Mc —
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        07/04/2023
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Overlay />
    <Logo
      style={{ position: "absolute", bottom: 40, left: 40, width: 30 }}
      color="red"
    />
  </>
);
