import React from "react";

function Form(props) {
  function myChangeHandler(event) {
    props.onChangeHandler(event);
  }
  function createForm(parameter) {
    return (
      <div class="col">
        <label>{parameter.name}</label>
        <input
          type={parameter.type}
          class="form-control"
          placeholder={parameter.name}
          name={parameter.name}
          onChange={myChangeHandler}
        ></input>
      </div>
    );
  }

  return (
    <div>
      <form>
        <div class="row">{props.fields.map(createForm)}</div>
      </form>
      <br />
    </div>
  );
}

export default Form;
