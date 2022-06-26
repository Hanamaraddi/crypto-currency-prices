import React from "react";

function ImgCard(props) {
  return (
    <>
      <div>
        <img src={props.url} alt={props.name} />
        <p style={{ color: "orange", fontWeight: "bold" }}>{props.name}</p>
        <p>Rank : {props.rank}</p>
        <p>Price in $ :{props.price}</p>
        <p>marketCap:{props.marketCap}</p>
      </div>
    </>
  );
}

export default ImgCard;
