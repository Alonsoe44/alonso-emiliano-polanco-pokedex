import NavegationBar from "../dist/components/NavegationBar";

describe("Given a buttton component", () => {
  describe("When it's intanciated", () => {
    test("Then it should render itself", () => {
      const container = document.createElement("div");

      new NavegationBar(container, "");

      expect(container.querySelector("nav")).not.toBeNull();
    });
  });
});
