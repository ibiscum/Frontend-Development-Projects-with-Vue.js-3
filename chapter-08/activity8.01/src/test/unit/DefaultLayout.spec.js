import { shallowMount } from "@vue/test-utils";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { describe, expect, it } from "vitest";

describe("DefaultLayout.vue", () => {
  it("should render ", () => {
    const wrapper = shallowMount(DefaultLayout);

    expect(wrapper.find("h1").text()).toBe("Messages section");
  });
});
