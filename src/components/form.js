import React from "react";

function createForm(parameter) {
  return (
    <div class="col">
      <label>{parameter.name}</label>
      <input
        type={parameter.type}
        class="form-control"
        placeholder={parameter.name}
      ></input>
    </div>
  );
}
function Form(props) {
  return (
    <div>
      <form>
        <div class="row">{props.fields.map(createForm)}</div>
      </form>
      <br/>
    </div>
  );
}

export default Form;
