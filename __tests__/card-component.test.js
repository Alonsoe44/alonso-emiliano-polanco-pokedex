import Card from "../dist/scripts/components/Card.js";

describe("Given a Card component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render itself", () => {
      const container = document.createElement("div");

      new Card(container, "arrr");

      expect(container.querySelector("div")).not.toBeNull();
    });

    describe("When it gets 'Bulbasaur' as title", () => {
      test("Then it should render the 'Bulbasaur'", () => {
        const container = document.createElement("div");
        const renderedTitle = "Bulbasaur";
        const expectedTitle = "Bulbasaur";

        new Card(container, renderedTitle, "");

        expect(container.textContent).toMatch(expectedTitle);
      });
    });

    describe("When it gets an image with src='superLink'", () => {
      test("Then it should have that src", () => {
        const container = document.createElement("div");
        const testSrc = "superLink";
        const expectedSrc = "superLink";

        new Card(container, "", testSrc);

        expect(container.querySelector("img").getAttribute("src")).toBe(
          expectedSrc
        );
      });
    });
  });
});
