import "../components/ErrorMessage.vue.mjs";
import "../components/LoadingSpinner.vue.mjs";
import "../components/Dashboard.vue.mjs";
import { defineComponent, ref, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useLocation } from "../composables/useLocation.mjs";
import { useWeather } from "../composables/useWeather.mjs";
import _sfc_main$1 from "../components/ErrorMessage.vue2.mjs";
import _sfc_main$2 from "../components/LoadingSpinner.vue2.mjs";
import _sfc_main$3 from "../components/Dashboard.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const error = ref(null);
    const weatherData = ref(null);
    const { getLocation } = useLocation();
    const { fetchWeather } = useWeather();
    const fetchWeatherData = async () => {
      loading.value = true;
      error.value = null;
      try {
        const { latitude, longitude, city } = await getLocation();
        const data = await fetchWeather(latitude, longitude, city || "");
        weatherData.value = data;
      } catch (err) {
        if (err instanceof Error) {
          error.value = err.message;
        } else {
          error.value = "Failed to fetch weather data";
        }
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ErrorMessage = _sfc_main$1;
      const _component_LoadingSpinner = _sfc_main$2;
      const _component_Dashboard = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md w-full" }, _attrs))}>`);
      if (error.value) {
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_ErrorMessage, {
          message: error.value,
          onRetry: fetchWeatherData
        }, null, _parent));
        _push(`</div>`);
      } else if (loading.value) {
        _push(`<div class="w-full flex justify-center">`);
        _push(ssrRenderComponent(_component_LoadingSpinner, null, null, _parent));
        _push(`</div>`);
      } else if (weatherData.value) {
        _push(ssrRenderComponent(_component_Dashboard, { weather: weatherData.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
