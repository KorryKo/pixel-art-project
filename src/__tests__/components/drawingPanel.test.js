import { render, screen } from "@testing-library/react";
import DrawingPanel from "../../components/drawing-panel";
import React from "react";

describe("Row component", () => {
  let drawingPanelComponent;
  beforeEach(() => {
    render(<DrawingPanel height={8} width={8} selectedColor={"#F70700"} />);
    drawingPanelComponent = screen.getByTestId("drawing-panel-component");
  });

  test("it should render Row component", () => {
    expect(drawingPanelComponent).toBeInTheDocument();
  });

  test("it should render 8 row components when width 8 and height 8 is passed", () => {
    expect(screen.queryAllByTestId("row-component")).toHaveLength(8);
  });
});
