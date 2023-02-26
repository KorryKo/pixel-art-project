import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pixel from "../../components/pixel";
import { rgb2hex } from "../../test-utils";

describe("Pixel component", () => {
  let pixelComponent;
  beforeEach(() => {
    render(<Pixel selectedColor={"#F70700"} />);
    pixelComponent = screen.getByTestId("pixel-component");
  });

  test("it should render pixel component", () => {
    expect(pixelComponent).toBeInTheDocument();
  });

  test("it change the color when hover pixel component", async () => {
    await userEvent.hover(pixelComponent);

    expect(rgb2hex(pixelComponent.style.backgroundColor)).toEqual("#F70700");
  });

  test("it change the color when click pixel component", async () => {
    fireEvent.click(pixelComponent);

    expect(rgb2hex(pixelComponent.style.backgroundColor)).toEqual("#F70700");
  });
});
