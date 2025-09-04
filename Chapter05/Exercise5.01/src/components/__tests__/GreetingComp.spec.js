import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Greeting from "../GreetingComp.vue";

describe("Greeting", () => {
  it("renders properly", () => {
    const wrapper = mount(Greeting);
    expect(wrapper.text()).toContain("Hello John");
  });
});
