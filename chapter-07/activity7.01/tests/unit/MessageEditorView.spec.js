import { shallowMount } from "@vue/test-utils";
import MessageEditor from "@/views/MessageEditorView.vue";
import { describe, it, expect } from "vitest";

describe("MessageList.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageEditor, {
      propsData: {
        list: ["123"],
      },
    });
    expect(wrapper.find("textarea").isVisible()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Submit");
  });
});
