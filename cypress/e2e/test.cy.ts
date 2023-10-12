import { seedToken } from "../Helpers/auth";

describe("template spec", () => {
  it("passes", () => {
    seedToken("abc@email.com", "123456", "/account/settings");
  });
});
