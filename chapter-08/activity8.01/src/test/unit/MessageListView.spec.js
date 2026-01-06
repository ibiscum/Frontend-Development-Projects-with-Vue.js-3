import { shallowMount } from "@vue/test-utils";
import MessageListView from "@/views/MessageListView.vue";
import { describe, expect, it } from "vitest";

describe("MessageListView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageListView, {
      stubs: ["router-link"],
    });
    expect(wrapper.find("h2").text()).toBe("Message Feed");
  });
});
