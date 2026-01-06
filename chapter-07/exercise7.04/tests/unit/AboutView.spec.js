import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.text()).toMatch("This is an about page");
  });
});
