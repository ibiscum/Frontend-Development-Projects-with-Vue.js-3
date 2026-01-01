import { shallowMount } from "@vue/test-utils";
import Movies from "@/components/MoviesComp.vue";
import { describe, it, expect } from "vitest";

describe("MoviesComp.vue", () => {
  const wrapper = shallowMount(Movies, {});

  it("render movies correctly", () => {
    expect(wrapper.findAll("li").length).toBe(3);
  });
});
