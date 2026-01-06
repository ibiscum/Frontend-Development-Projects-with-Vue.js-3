import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MessageFeedView from "@/views/MessageFeedView.vue";

describe("MessageFeedView.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageFeedView, {
      stubs: ["router-link"],
    });
    expect(wrapper.find("h2").text()).toBe("Message Feed");
  });
});
