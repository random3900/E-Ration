import React from "react";
function ItemCard(props) {
  return (
    <div
      class="container"
      style={{
        height: "38vh",
        width: "20vw",
        borderRadius: "10px",
        backgroundColor: "#d1e8c6",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "1vh 1vh",
        margin:"3vh",
        display:"inline-block",
        boxShadow:"0px 1px 10px grey"
      }}
    >
      <h4>{props.Heading}</h4>
      <hr />
      <h5>{props.subHeading}</h5>
      <p>{props.content}</p>
      <button class="btn btn-secondary">Add to Cart</button>
    </div>
  );
}

export default ItemCard;
