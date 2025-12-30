import { mount } from "@vue/test-utils";
import Exercise from "@/components/Exercise1-02.vue";
import { describe, it, expect } from "vitest";

describe("Exercise1-02.vue", () => {
  it("renders props.title when passed", () => {
    let title = "My first component!";
    const wrapper = mount(Exercise, {
      propsData: { title },
    });

    wrapper.setData({ isUppercase: true, title: title });

    expect(wrapper.text()).toMatch(title.toUpperCase());
  });
});
