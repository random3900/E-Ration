import React from "react";
import ItemCard from "./itemCard";
import Header from "./header";
import Footer from "./footer";
import Items from "./itemsSpec";

function ItemsList(props) {
  return (
    <div>
      <Header />
      <div
        style={{
          paddingLeft: "7vh",
          paddingTop: "2vh",
          backgroundColor: "#e8d6cc"
        }}
      >
        {Items.map((it) => {
          return (
            <ItemCard
              Heading={it.name}
              subHeading={it.price}
              content={it.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ItemsList;
