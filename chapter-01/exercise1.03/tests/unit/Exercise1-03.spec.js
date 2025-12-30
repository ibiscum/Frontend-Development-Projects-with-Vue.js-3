import { mount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-03.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-03.vue", () => {
  const wrapper = mount(Exercise, {});

  it("hidden elements to not be rendered", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("h2").isVisible()).toBe(false);
  });

  // it("renders anchor tag with data", () => {
  //   let link = {
  //     url: "https://google.com",
  //     target: "_blank",
  //     tabindex: "0",
  //     title: "Go to Google",
  //   };

  //   expect(wrapper.text()).toMatch(link.title);
  // });
});
