import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [sushiDisplayed, setSushiDisplay] = useState(0);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
  }, [])

  function handleClick() {
    setSushiDisplay((sushiDisplayed + 4) % sushis.length);
  }

  function handleEaten(id) {
    console.log(id)
    setSushis(sushis.map(sushi => sushi.id === id ? {...sushi, eaten:true} : sushi 
      )
    );
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis.slice(sushiDisplayed, sushiDisplayed + 4)}
      handleClick={handleClick}
      handleEaten={handleEaten} />
      <Table />
    </div>
  );
}

export default App;
