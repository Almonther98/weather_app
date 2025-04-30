import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderComponent } from "vue/server-renderer";
import { Wind, Droplets, CloudRain, Gauge, Cloud, CloudSnow, CloudLightning, CloudFog, Sun } from "lucide-vue-next";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    weather: {}
  },
  setup(__props) {
    const formatDate = (date) => {
      const options = {
        weekday: "long",
        month: "short",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en-US", options);
    };
    const getCurrentTime = () => {
      const now = /* @__PURE__ */ new Date();
      return now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    };
    const getWeatherIcon = (condition) => {
      const conditionLower = condition.toLowerCase();
      if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
        return CloudRain;
      } else if (conditionLower.includes("cloud")) {
        return Cloud;
      } else if (conditionLower.includes("snow") || conditionLower.includes("ice")) {
        return CloudSnow;
      } else if (conditionLower.includes("storm") || conditionLower.includes("thunder")) {
        return CloudLightning;
      } else if (conditionLower.includes("fog") || conditionLower.includes("mist") || conditionLower.includes("haze")) {
        return CloudFog;
      } else {
        return Sun;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto" }, _attrs))}><div class="p-6 text-center relative"><div class="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">${ssrInterpolate(getCurrentTime())}</div><h2 class="text-2xl font-bold text-white mt-2">${ssrInterpolate(((_a = _ctx.weather.location) == null ? void 0 : _a.name) || "Your Location")}</h2>`);
      if ((_b = _ctx.weather.location) == null ? void 0 : _b.region) {
        _push(`<p class="text-blue-100 text-sm">${ssrInterpolate(_ctx.weather.location.region)}, ${ssrInterpolate(_ctx.weather.location.country)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative px-6 pb-8 pt-2 text-center"><div class="flex justify-center mb-4">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getWeatherIcon(_ctx.weather.current.condition)), { class: "h-16 w-16 text-white" }, null), _parent);
      _push(`</div><div class="mb-6"><div class="flex items-center justify-center"><span class="text-7xl font-bold text-white tracking-tighter">${ssrInterpolate(Math.round(_ctx.weather.current.temp))}</span><span class="text-5xl font-light text-white ml-1">°</span></div><div class="text-2xl font-medium text-white/90 mt-2">${ssrInterpolate(_ctx.weather.current.condition)}</div><div class="text-sm text-blue-100 mt-2">${ssrInterpolate(formatDate(_ctx.weather.current.date))}</div></div></div><div class="bg-white/10 backdrop-blur-md p-4 grid grid-cols-2 gap-3 text-white"><div class="flex items-center p-3 rounded-xl bg-white/10"><div class="p-2 rounded-lg bg-blue-500/30 mr-3">`);
      _push(ssrRenderComponent(unref(Wind), { class: "h-5 w-5" }, null, _parent));
      _push(`</div><div><div class="text-xs text-blue-100">Wind</div><div class="font-semibold">${ssrInterpolate(_ctx.weather.current.wind)} mph</div></div></div><div class="flex items-center p-3 rounded-xl bg-white/10"><div class="p-2 rounded-lg bg-blue-500/30 mr-3">`);
      _push(ssrRenderComponent(unref(Droplets), { class: "h-5 w-5" }, null, _parent));
      _push(`</div><div><div class="text-xs text-blue-100">Humidity</div><div class="font-semibold">${ssrInterpolate(_ctx.weather.current.humidity)}%</div></div></div><div class="flex items-center p-3 rounded-xl bg-white/10"><div class="p-2 rounded-lg bg-blue-500/30 mr-3">`);
      _push(ssrRenderComponent(unref(CloudRain), { class: "h-5 w-5" }, null, _parent));
      _push(`</div><div><div class="text-xs text-blue-100">Precipitation</div><div class="font-semibold">${ssrInterpolate(_ctx.weather.current.precipitation)} in</div></div></div><div class="flex items-center p-3 rounded-xl bg-white/10"><div class="p-2 rounded-lg bg-blue-500/30 mr-3">`);
      _push(ssrRenderComponent(unref(Gauge), { class: "h-5 w-5" }, null, _parent));
      _push(`</div><div><div class="text-xs text-blue-100">Pressure</div><div class="font-semibold">${ssrInterpolate(_ctx.weather.current.pressure)} hPa</div></div></div></div></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Dashboard.vue2.mjs.map
