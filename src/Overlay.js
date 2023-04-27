import "./style.css";

function Overlay({ counter1, counter2 }) {
  let coinCount = 10;
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
      <a
        href="https://pmnd.rs/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: 40,
          left: 90,
          fontSize: "13px",
          color: "red",
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      >
        pmnd.rs
        <br />
        dev collective
      </a>
      <a
        href="https://www.instagram.com/catzcollective/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            fontSize: "13px",
          }}
        >
          C.Mc —
        </div>
      </a>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
          color: "red",
        }}
      >
        07/04/2023
      </div>
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
        <div style={{ color: "red", fontSize: "3rem" }}>{counter1}</div>
        <br />
        <div style={{ color: "blue", fontSize: "3rem" }}>{counter2}</div>
        {/* <button onClick={buttonClick}>Click here</button> */}
      </div>
    </div>
  );
}

export { Overlay };
