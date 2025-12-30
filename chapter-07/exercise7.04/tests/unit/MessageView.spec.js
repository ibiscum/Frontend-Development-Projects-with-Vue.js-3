import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Message from "@/views/MessageView.vue";

describe("MessageView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(Message, {
      propsData: { content: "123" },
    });
    expect(wrapper.text()).toBe("123");
  });
});
