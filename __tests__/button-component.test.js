import Button from "../dist/scripts/components/Button.js";

describe("Given a buttton component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render itself", () => {
      const container = document.createElement("div");

      new Button(container, "a", "div", " ", " ");

      expect(container.querySelector("div")).not.toBeNull();
    });

    describe("When it gets 'next' as text", () => {
      test("Then it should render the text", () => {
        const container = document.createElement("div");
        const renderedText = "next";
        const expectedText = "next";
        new Button(container, "", "div", renderedText);

        expect(container.textContent).toMatch(expectedText);
      });
    });

    describe("When it is clicked", () => {
      test("Then it should call a function", () => {
        const container = document.createElement("div");
        const action = jest.fn();

        const button = new Button(container, "", "div", "", "", action);
        button.element.click();

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
