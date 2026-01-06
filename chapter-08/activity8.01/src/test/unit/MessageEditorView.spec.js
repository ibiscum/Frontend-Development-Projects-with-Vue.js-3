import { shallowMount } from "@vue/test-utils";
import MessageEditorView from "@/views/MessageEditorView.vue";
import { describe, expect, it } from "vitest";

describe("MessageEditorView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageEditorView, {
      propsData: {
        list: ["123"],
      },
    });
    expect(wrapper.find("textarea").isVisible()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Submit");
  });
});
