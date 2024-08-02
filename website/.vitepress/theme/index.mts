import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import HomeBox from "./HomeBox.vue";

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            "home-hero-info-before": () => h(HomeBox),
        });
    }
} satisfies Theme;
