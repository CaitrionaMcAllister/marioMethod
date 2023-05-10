import React from "react";

export function HtmlOverlay() {
  return (
    <div
      style={{
        background: "white",
        fontFamily: "Mario4",
        lineHeight: 1,
      }}
    >
      <h5
        style={{
          position: "absolute",
          top: "10vh",
          left: "25vw",
          fontSize: "min(10vw, 80px)",
          transform: "translateX(-50%)",
          color: "#FF3131",
          margin: 0,
          size: "relative",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        The Mario Method
      </h5>
      {/* <img
        src="public/hand.gif"
        alt="HTML5 Icon"
        style="width:128px;height:128px;"
      ></img> */}
      <h6
        style={{
          position: "absolute",
          top: "120vh",
          left: "30vw",
          fontSize: "min(3.5vw, 80px)",
          transform: "translateX(-65%)",
          color: "#00a800",
          margin: 0,
          size: "relative",
          textAlign: "center",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        What if we could interact with digital platforms?
        {/* Page2: Parargraph here about gamification as a way to engage audiences
        on digtial platforms like websites */}
      </h6>
      <h6
        style={{
          position: "absolute",
          top: "230vh",
          left: "50vw",
          fontSize: "min(3.5vw, 80px)",
          transform: "translateX(70%)",
          color: "#00a800",
          margin: 0,
          textAlign: "center",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        What if websites were real spaces?
        {/* Page3: Parargraph here about how this webpage has loads of hidden easter eggs that gamify it */}
      </h6>
      <h6
        style={{
          position: "absolute",
          top: "350vh",
          left: "50vw",
          fontSize: "min(3.5vw, 80px)",
          transform: "translateX(-50%)",
          color: "#FF3131",
          margin: 0,
          textAlign: "center",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        What if YOU entered the game...?
        {/* Page4: Parargraph here asking the viewer if they found all the easter eggs */}
      </h6>
    </div>
  );
}
