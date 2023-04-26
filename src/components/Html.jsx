import React from "react";

export function HtmlOverlay() {
  return (
    <div
      style={{
        background: "white",
        fontFamily: "Mario4",
        fontSize: "min(12vw, 86px)",
        lineHeight: 1,
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
      <p
        style={{
          position: "absolute",
          top: "140vh",
          left: "50vw",
          transform: "translateX(-65%)",
          color: "#FF3131",
          margin: 0,
          size: "relative",
        }}
      >
        Page2
        {/* Page2: Parargraph here about gamification as a way to engage audiences
        on digtial platforms like websites */}
      </p>
      <h6
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
        {/* Page3: Parargraph here about how this webpage has loads of hidden easter eggs that gamify it */}
      </h6>
      <h6
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
        {/* Page4: Parargraph here asking the viewer if they found all the easter eggs */}
      </h6>
    </div>
  );
}
