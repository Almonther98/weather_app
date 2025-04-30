import { useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const useWeather = () => {
  const config = useRuntimeConfig();
  const fetchWeather = async (latitude, longitude, city) => {
    try {
      const API_KEY = config.public.weatherApiKey || "3d9d6b00173f4017a5f152806252904";
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data unavailable");
      }
      const data = await response.json();
      console.log(data);
      return {
        current: {
          temp: data.current.temp_c,
          // Using Fahrenheit as in the original
          condition: data.current.condition.text,
          date: /* @__PURE__ */ new Date(),
          humidity: data.current.humidity,
          wind: data.current.wind_mph,
          precipitation: data.current.precip_in,
          pressure: data.current.pressure_mb
        },
        location: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country
        }
      };
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw new Error("Failed to fetch weather data");
    }
  };
  return {
    fetchWeather
  };
};
export {
  useWeather
};
//# sourceMappingURL=useWeather.mjs.map
