import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleClick, handleEaten}) {
  const renderSushis = sushis.map((sushi) => {
    return (
      <Sushi key={sushi.id} sushi={sushi} handleEaten={handleEaten}/>)
  })
  
  return (
    <div className="belt">
      {renderSushis}
      <MoreButton handleClick={handleClick}/>
    </div>
  );
}

export default SushiContainer;
