import { getSalt } from "../../shared/utils";

describe("utils", () => {
  describe("getSalt", () => {
    it("should get a string with ten characters", () => {
      expect(getSalt()).not.toBeNull();
    });
  });
});
