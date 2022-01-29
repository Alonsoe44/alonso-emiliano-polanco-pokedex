import NavegationBar from "../dist/scripts/components/NavegationBar.js";

describe("Given a navegation bar component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render itself", () => {
      const container = document.createElement("div");

      new NavegationBar(container, "");

      expect(container.querySelector("nav")).not.toBeNull();
    });
  });
});
