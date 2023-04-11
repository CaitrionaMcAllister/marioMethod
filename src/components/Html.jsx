import React from "react";

export function Html() {
  return (
    <div
      style={{
        background: "white",
        fontFamily: "sans-serif",
        fontSize: "min(12vw, 86px)",
        lineHeight: 0.75,
      }}
    >
      <h5
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#4F7942",
          margin: 0,
          size: "relative",
        }}
      >
        Botanical Breakthroughs
      </h5>
      <h1
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#4682B4",
          margin: 0,
        }}
      >
        Page2
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "250vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#4F7942",
          margin: 0,
        }}
      >
        Page3
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "350vh",
          left: "50vw",
          transform: "translateX(-50%)",
          color: "#4682B4",
          margin: 0,
        }}
      >
        Ground
      </h1>
    </div>
  );
}
