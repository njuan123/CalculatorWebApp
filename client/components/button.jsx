import React from 'react'; // import react module

// create our Button component as a functional component
const Button = (props) => {
  var button_type;
  if (props.type == "action") {
    button_type = 'button action-button';
  } else if (props.type == "input") {
    button_type = 'button input-button';
  } else {
    button_type = 'placeholder';
  }
  return (
    <input
      type="button"
      className={button_type}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

// describe our expected props types
Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired
}

// export our button component.
export default Button;