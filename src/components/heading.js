import React from "react";

function Header(props) {
  return (
    <div>
      <br />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <div class="page-header">
        <h1>{props.title}</h1>
        <hr />
      </div>
      <br />
    </div>
  );
}

export default Header;
