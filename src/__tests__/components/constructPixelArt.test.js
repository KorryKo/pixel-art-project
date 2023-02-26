import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConstructPixelArt from "../../components/construct-pixel-art";

describe("ConstructPixelArt component", () => {
  let constructPixelArtContainer;
  beforeEach(() => {
    render(<ConstructPixelArt />);
    constructPixelArtContainer = screen.getByTestId(
      "construct-pixel-art-component"
    );
  });

  test("it should render ConstructPixelArt component", () => {
    expect(constructPixelArtContainer).toBeInTheDocument();
  });

  test("it should render ConstructPixelArt title", () => {
    expect(
      screen.getByRole("heading", { name: "Pixel Art" })
    ).toBeInTheDocument();
  });

  test("it should render 256 times pixel component when 16 size is chosen", async () => {
    await userEvent.selectOptions(screen.getByRole("combobox"), ["16"]);

    expect(screen.queryAllByTestId("pixel-component")).toHaveLength(256);
  });
});
