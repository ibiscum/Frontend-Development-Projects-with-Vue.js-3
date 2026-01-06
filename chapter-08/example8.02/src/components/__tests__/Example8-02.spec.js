import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Example from "../Example8-02.vue";

describe("Example8-02.vue", () => {
  it("should render message", () => {

    const wrapper = mount(Example);

    expect(wrapper.find('Welcome to your Vue.js App').exists()).toBe(false);
    wrapper.find('button').trigger('click');

    // After clicking the button, the <h1> element exists and is visible
    expect(wrapper.get('h1').text()).toEqual('Welcome to your Vue.js App');
    
    //expect(wrapper.find(".message--display span").text()).toBe(message);
  });
});
