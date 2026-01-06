import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Example from "../Example8-01.vue";

describe("Example8-01.vue", () => {
  it("should render message", () => {
    const wrapper = mount(Example);

    expect(wrapper.find('I should be fade in').exists()).toBe(false);
    wrapper.find('button').trigger('click');
    
    // After clicking the button, the <h1> element exists and is visible
    expect(wrapper.get('h1').text()).toEqual('I should be fade in');
  });
});
