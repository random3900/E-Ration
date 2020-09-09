import React from "react";
import Fields from "./menuSpec";
function menuIcon(props) {
  const item = Fields[props.item];
  const iconSource = item.iconSource;
  const altText = item.altText;
  const itemName = item.itemName;
  const hrefLink = item.hrefLink;

  return (
    <div style={{ margin: "5vh", textAlign: "center" }}>
      <img src={iconSource} alt={altText} height="170vh"></img>
      <h4> {itemName} </h4>
    </div>
  );
}

export default menuIcon;
