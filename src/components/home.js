/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "./header";
import Footer from "./footer";
import BG from "./bg1.jpg";
function Home(props) {
  return (
    <div style={{ backgroundColor: "#e8d6cc" }}>
      <Header />
      <div class="row" style={{ marginTop: 0, paddingTop: 0 }}>
        <div
          class="col"
          style={{
            backgroundColor: "#e8d6cc",
            backgroundPosition: "center",
            height: "85vh",
            padding: "10vh",
            fontFamily: "serif",
            fontSize: "4.5vh",
            color: "#343a40",
            margin: 0,
          }}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident."
          <br />
          <hr />
          <button class="btn btn-dark">Let's Go!</button>
        </div>
        <div class="col">
          <div
            class="container"
            style={{
              backgroundImage: "url(" + BG + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              boxShadow: "7px 7px 15px #000000",
              height: "75vh",
              width: "38vw",
              margin: "0vh 0vh 3.0vh 3.0vh",
              padding: 0,
              borderRadius: "5px"
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
