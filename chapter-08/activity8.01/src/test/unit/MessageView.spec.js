import { shallowMount } from "@vue/test-utils";
import MessageView from "@/views/MessageView.vue";
import { describe, expect, it } from "vitest";

describe("Message.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageView, {
      stubs: ["router-view"],
      propsData: {
        content: "123",
      },
    });
    expect(wrapper.find("p").text()).toBe("123");
  });
});
