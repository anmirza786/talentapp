import React from "react";
import { ColorRing } from "react-loader-spinner";

function Loader(props) {
  return (
    <ColorRing
      visible={true}
      height="200"
      width="200"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#1A202E", "#1a202eed", "#1a202ede", "#1a202ed1", "#1a202ebf"]}
    />
  );
}

export default Loader;
