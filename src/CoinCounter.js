import "./style.css";
import { Background } from "./Background";

// import { useState } from "react";

function CoinCounter() {
  let coinCount = 10;

  //   const buttonClick = () => {
  //     console.log("button has been clicked");
  //   };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        target: "_blank",
        rel: "noopener noreferrer",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          fontSize: "13px",
          color: "red",
        }}
      >
        Coin Count: {coinCount}
        {/* <button onClick={buttonClick}>Click here</button> */}
      </div>
    </div>
  );
}

export { CoinCounter };
