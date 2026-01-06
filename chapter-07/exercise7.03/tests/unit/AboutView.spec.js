import { describe, it, expect } from 'vitest';
import { shallowMount } from "@vue/test-utils";
import About from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toMatch("About John Doe");
  });
});
