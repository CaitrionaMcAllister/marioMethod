import React from "react";

export function Html() {
  return (
    <div
      style={{
        background: "white",
        fontFamily: "Mario4",
        fontSize: "min(12vw, 86px)",
        lineHeight: 1.5,
      }}
    >
      <h5
        style={{
          position: "absolute",
          top: "10vh",
          left: "25vw",
          transform: "translateX(-50%)",
          color: "#FF3131",
          margin: 0,
          size: "relative",
        }}
      >
        The Mario Method
      </h5>
      <h1
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#FF3131",
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
          color: "#FF3131",
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
          color: "#FF3131",
          margin: 0,
        }}
      >
        Page4
      </h1>
    </div>
  );
}
