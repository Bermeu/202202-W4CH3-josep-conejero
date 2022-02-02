import { render, screen } from "@testing-library/react";
import Info from "../components/Info";

describe("Given the Info component and CallingStatus", () => {
  describe("When it's rendered", () => {
    test("Then it should render calling", () => {
      const callingStatus = true;
      const textInfo = "Calling...";

      render(<Info className="" calling={callingStatus} />);

      const infoElement = screen.queryByText(textInfo);

      expect(infoElement).toBeInTheDocument();
    });
  });
});
