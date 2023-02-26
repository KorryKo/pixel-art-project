import React, { useRef } from "react";
import Row from "../row";
import "./styles.css";
import html2canvas from "html2canvas";
import { generate } from "./gifGenerator";

const DrawingPanel = (props) => {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }


  const exportAsImage = async (element, imageFileName, format) => {
     const canvas = await html2canvas(element);

    let image;
    switch (format) {
      case "jpg":
        image = canvas.toDataURL("image/jpeg");
        break;
      case "gif":
        image = await generate(canvas);
        break;
      default:
        image = canvas.toDataURL();
        break;
    }
    downloadImage(image, imageFileName);
  };

  const downloadImage = async (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = await blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  return (
    <div data-testid="drawing-panel-component" className="drawingPanel">
      <div className="pixels" ref={panelRef}>
        {rows}
      </div>
      <div className="downloadButtonsContainer">
        <button
          onClick={() => exportAsImage(panelRef.current, "pixel-art")}
          className="downloadButton"
        >
          Download as PNG
        </button>
        <button
          onClick={() => exportAsImage(panelRef.current, "pixel-art", "jpg")}
          className="downloadButton"
        >
          Download as JPG
        </button>
        <button
          onClick={() => exportAsImage(panelRef.current, "pixel-art", "gif")}
          className="downloadButton"
        >
          Download as GIF
        </button>
      </div>
    </div>
  );
};

export default DrawingPanel;
