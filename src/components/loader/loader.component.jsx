import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (onLoader) {
    return (
      <img
        className="loader-img"
        src="https://www.flaticon.com/svg/vstatic/svg/455/455690.svg?token=exp=1613749667~hmac=e3a990281e03a032eb163cdfc1d43eaf"
        alt="loader"
      />
    );
  }

  return children;
};

export default Loader;
