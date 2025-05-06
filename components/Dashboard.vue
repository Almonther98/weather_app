<template>
  <div :class="getDynamicBackgroundClass()" class="rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
    <!-- Location header with time -->
    <div class="p-6 text-center relative">
      <div class="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
        {{ getCurrentTime() }}
      </div>
      <h2 class="text-2xl font-bold text-white mt-2">
        {{ weather.location?.name || 'Your Location' }}
      </h2>
      <p class="text-blue-100 text-sm" v-if="weather.location?.region">
        {{ weather.location.region }}, {{ weather.location.country }}
      </p>
    </div>
    
    <!-- Main Weather Display -->
    <div class="relative px-6 pb-8 pt-2 text-center">
      <!-- Weather Icon -->
      <div class="flex justify-center mb-4">
        <component :is="getWeatherIcon(weather.current.condition)" class="h-16 w-16 text-white" />
      </div>
      
      <!-- Temperature and Condition -->
      <div class="mb-6">
        <div class="flex items-center justify-center">
          <span class="text-7xl font-bold text-white tracking-tighter">
            {{ Math.round(weather.current.temp) }}
          </span>
          <span class="text-5xl font-light text-white ml-1">°</span>
        </div>
        <div class="text-2xl font-medium text-white/90 mt-2">
          {{ weather.current.condition }}
        </div>
        <div class="text-sm text-blue-100 mt-2">
          {{ formatDate(weather.current.date) }}
        </div>
      </div>
    </div>
    
    <!-- Weather Details -->
    <div class="bg-white/10 backdrop-blur-md p-4 grid grid-cols-2 gap-3 text-white">
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <Wind class="h-5 w-5" />
        </div>
        <div>
          <div class="text-xs text-blue-100">Wind</div>
          <div class="font-semibold">{{ weather.current.wind }} mph</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <Droplets class="h-5 w-5" />
        </div>
        <div>
          <div class="text-xs text-blue-100">Humidity</div>
          <div class="font-semibold">{{ weather.current.humidity }}%</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <CloudRain class="h-5 w-5" />
        </div>
        <div>
          <div class="text-xs text-blue-100">Precipitation</div>
          <div class="font-semibold">{{ weather.current.precipitation }} in</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <Gauge class="h-5 w-5" />
        </div>
        <div>
          <div class="text-xs text-blue-100">Pressure</div>
          <div class="font-semibold">{{ weather.current.pressure }} hPa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog, Wind, Droplets, Gauge } from 'lucide-vue-next';

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    date: Date;
    humidity: number;
    wind: number;
    precipitation: number;
    pressure: number;
  },
  location?: {
    name: string;
    region: string;
    country: string;
  }
}

const props = defineProps<{
  weather: WeatherData
}>();

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  });
};

// Weather icon functionality using Lucide icons
const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return CloudRain;
  } else if (conditionLower.includes('cloud')) {
    return Cloud;
  } else if (conditionLower.includes('snow') || conditionLower.includes('ice')) {
    return CloudSnow;
  } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
    return CloudLightning;
  } else if (conditionLower.includes('fog') || conditionLower.includes('mist') || conditionLower.includes('haze')) {
    return CloudFog;
  } else {
    return Sun;
  }
};

// Generate dynamic background class based on temperature in Celsius
const getDynamicBackgroundClass = () => {
  const temp = Math.round(props.weather.current.temp);
  
  // Define temperature thresholds in Celsius
  if (temp <= 0) {
    // Very cold (freezing or below)
    return 'bg-gradient-to-br from-blue-900 to-blue-700';
  } else if (temp <= 20) {
    // Cold
    return 'bg-gradient-to-br from-blue-600 to-blue-400';
  } else if (temp <= 25) {
    // Cool
    return 'bg-gradient-to-br from-blue-400 to-indigo-600';
  } else if (temp <= 30) {
    // Mild
    return 'bg-gradient-to-br from-indigo-400 to-purple-600';
  } else if (temp <= 35) {
    // Warm
    return 'bg-gradient-to-br from-purple-400 to-orange-500';
  } else if (temp <= 40) {
    // Hot
    return 'bg-gradient-to-br from-orange-500 to-red-500';
  } else {
    // Very hot
    return 'bg-gradient-to-br from-red-500 to-red-700';
  }
};
</script>