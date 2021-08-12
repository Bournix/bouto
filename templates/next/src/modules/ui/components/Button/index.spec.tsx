import { shallow } from "enzyme";
import React from "react";

import Button from "./index"

describe("With Enzyme", () => {
  it('App shows "A simple button"', () => {
    const app = shallow(<Button>test</Button>);
  });
});