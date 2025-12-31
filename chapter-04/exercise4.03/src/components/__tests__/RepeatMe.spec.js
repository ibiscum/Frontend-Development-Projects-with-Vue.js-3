import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Repeat from "../RepeatMe.vue";

describe("RepeatMe.vue", () => {
  it("renders properly", () => {
    const wrapper = mount(Repeat, {
      props: { config: { times: 1, content: "Hello" } },
    });
    expect(wrapper.text()).toContain("Hello");
  });
});
