import React, { useState } from "react";
import DrawingPanel from "../drawing-panel";
import "./styles.css";

const ConstructPixelArt = () => {
  const GRID_SIZES = [8, 12, 16, 32];
  const GRID_COLORS = [
    "#F70700",
    "#8C0B8B",
    "#7EFE00",
    "#021AFF",
    "#FEFE00",
    "#FBA505",
    "#FFFFFF",
    "#000000",
    "#FEE5C4",
    "#FCC0CB",
    "#D2691D",
  ];

  const [gridSize, setGridSize] = useState(8);
  const [selectedColor, setSelectedColor] = useState(GRID_COLORS[0]);

  const chooseGridSize = (e) => {
    setGridSize(e.target.value);
  };

  const chooseTheColor = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };

  return (
    <div
      data-testid="construct-pixel-art-component"
      className="constructPixelArtContainer"
    >
      <h1>Pixel Art</h1>
      <div className="sizeContainer">
        <p>Choose the size</p>
        <select
          className="selectSize"
          value={gridSize}
          onChange={chooseGridSize}
        >
          {GRID_SIZES.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </div>
      <div className="colorContainer">
        <p>Choose the color</p>
        {GRID_COLORS.map((color) => (
          <button
            key={color}
            className="colorButton"
            onClick={chooseTheColor}
            style={{
              backgroundColor: color,
            }}
          ></button>
        ))}
      </div>
      <DrawingPanel
        width={gridSize}
        height={gridSize}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default ConstructPixelArt;
