import React, { useEffect, useState } from "react";
import iconDice from "./images/icon-dice.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import mobileDivider from "./images/pattern-divider-mobile.svg";
function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setQuote(data.slip);
  }

  return (
    <div className="quote">
      <h3 className="quote__id">ADVICE #{quote.id}</h3>
      <h1 className="quote__text">"{quote.advice}"</h1>
      <div className="divider">
        <img
          src={window.innerWidth > 500 ? desktopDivider : mobileDivider}
          alt="divider"
        />
      </div>
      <div class="icon-dice">
        <img src={iconDice} alt="icon dice" />
      </div>
    </div>
  );
}

export default App;
