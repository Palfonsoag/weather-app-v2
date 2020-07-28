import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <div>
      Welcome
      <div>
        <Link to="/main">go to main</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
