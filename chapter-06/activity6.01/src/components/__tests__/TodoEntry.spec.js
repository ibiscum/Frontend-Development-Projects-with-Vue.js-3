import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TodoEntry from "../TodoEntry.vue";

describe("TodoEntry", () => {
  it("renders properly", () => {
    const wrapper = mount(TodoEntry, { props: { title: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
