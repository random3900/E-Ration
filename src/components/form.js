import React from "react";

function Form(props) {
  const [state, setState] = React.useState({});
  console.log(state);
  function myChangeHandler(event) {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(state);
  }
  function createForm(parameter) {
    return (
      <div class="col">
        <label>{parameter.name}</label>
        <input
          type={parameter.type}
          class="form-control"
          placeholder={parameter.name}
          value={state[parameter.name]}
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
