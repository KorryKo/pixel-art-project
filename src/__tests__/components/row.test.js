import { render, screen } from "@testing-library/react";
import Row from "../../components/Row";

describe("Row component", () => {
  let rowComponent;
  beforeEach(() => {
    render(<Row width={8} selectedColor={"#F70700"} />);
    rowComponent = screen.getByTestId("row-component");
  });

  test("it should render Row component", () => {
    expect(rowComponent).toBeInTheDocument();
  });

  test("it should render 8 pixel components when width 8 is passed", () => {
    expect(screen.queryAllByTestId("pixel-component")).toHaveLength(8);
  });
});
