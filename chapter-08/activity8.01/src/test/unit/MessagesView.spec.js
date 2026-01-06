import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { routes } from "@/router/index.js";
import MessagesView from "@/views/MessagesView.vue";
import { describe, expect, it } from "vitest";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("MessagesView.vue", () => {
  it("renders component", async () => {
    const router = new VueRouter({ routes, mode: "abstract" });
    const wrapper = mount(MessagesView, {
      localVue,
      router,
    });

    expect(wrapper.find("[href='/list']").exists()).toBe(true);
    expect(wrapper.find("[href='/editor']").exists()).toBe(true);
  });
});
