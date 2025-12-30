import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import MessageFeed from "@/views/MessageFeedView.vue";

describe("MessageFeed.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMount(MessageFeed, {
      stubs: ["router-link"],
    });
    expect(wrapper.find("h2").text()).toBe("Message Feed");
  });
});
