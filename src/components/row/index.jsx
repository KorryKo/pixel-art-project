import React from "react";
import Pixel from "../pixel";
import "./styles.css";

const Row = (props) => {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return (
    <div data-testid="row-component" className="row">
      {pixels}
    </div>
  );
};

export default Row;
