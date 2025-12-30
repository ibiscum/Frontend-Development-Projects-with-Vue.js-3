import { describe, it, expect } from 'vitest';
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/HomeView.vue";

describe("Home.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(".home").isVisible()).toBe(true);
  });
});
