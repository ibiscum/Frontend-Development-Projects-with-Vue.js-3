import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MessageView from "@/views/MessageView.vue";

describe("MessageView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageView, {
      propsData: { content: "123" },
    });
    expect(wrapper.text()).toBe("123");
  });
});
