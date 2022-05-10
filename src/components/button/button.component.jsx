/*
default 

inverted

google sign in
*/

import "./button.styles.scss";

const BUTTON_TYPES_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherprops }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASS[buttonType]}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
