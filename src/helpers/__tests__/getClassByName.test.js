import getClassByName from "../getClassByName";
import { getClassList } from "../../api/__mocks__/mockAPI";

test("checkmock", () => {
  expect(getClassByName()).toBe(null);
});
