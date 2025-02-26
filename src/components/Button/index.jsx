import PropTypes from "prop-types";

import { StyleButton } from "./styles";
import Spinner from "../Spinner";

export default function Button({
  type,
  disabled,
  isLoading,
  children,
  onClick,
}) {
  return (
    <StyleButton type={type} disabled={disabled || isLoading} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyleButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  isLoading: false,
};
