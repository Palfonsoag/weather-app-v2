import React from "react";
import PropTypes from "prop-types";

const WelcomeScreen = ({ children }) => {
  return <div className="full">{children}</div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
