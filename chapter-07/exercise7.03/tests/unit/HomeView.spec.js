import { describe, it, expect } from 'vitest';
import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.find(".home").isVisible()).toBe(true);
  });
});
