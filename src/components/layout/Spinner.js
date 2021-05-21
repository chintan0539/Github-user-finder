import React, { Fragment } from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Fragment>
      <Loader
        type="TailSpin"
        color="#000"
        height={100}
        width={100}
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
