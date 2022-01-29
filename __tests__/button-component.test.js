import Button from "../dist/components/Button.js";

describe("Given a buttton component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render itself", () => {
      const container = document.createElement("div");

      new Button(container, "arrr");

      expect(container.querySelector("button")).not.toBeNull();
    });

    describe("When it gets 'next' as text", () => {
      test("Then it should render the text", () => {
        const container = document.createElement("div");
        const renderedText = "next";
        new Button(container, "", renderedText);

        expect(container.textContent).toBe("next");
      });
    });

    describe("When it is clicked", () => {
      test("Then it should call a function", () => {
        const container = document.createElement("div");
        const action = jest.fn();
        const button = new Button(container, "", "", action);
        button.element.click();

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
