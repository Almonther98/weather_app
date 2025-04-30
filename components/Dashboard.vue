<template>
  <div class="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
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
        <div class="weather-icon" v-html="getWeatherIcon(weather.current.condition)"></div>
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14.5v.5a2 2 0 01-2 2h-1.5a2 2 0 01-2-2v-.5M2.5 12h19"></path>
          </svg>
        </div>
        <div>
          <div class="text-xs text-blue-100">Wind</div>
          <div class="font-semibold">{{ weather.current.wind }} mph</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
          </svg>
        </div>
        <div>
          <div class="text-xs text-blue-100">Humidity</div>
          <div class="font-semibold">{{ weather.current.humidity }}%</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>
        </div>
        <div>
          <div class="text-xs text-blue-100">Precipitation</div>
          <div class="font-semibold">{{ weather.current.precipitation }} in</div>
        </div>
      </div>
      
      <div class="flex items-center p-3 rounded-xl bg-white/10">
        <div class="p-2 rounded-lg bg-blue-500/30 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
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

// Weather icon functionality
const getWeatherIcon = (condition: string): string => {
  const conditionLower = condition.toLowerCase();
  
  // Determine icon type based on condition
  let iconType: 'sunny' | 'cloudy' | 'rain' | 'snow' | 'storm' | 'fog' = 'sunny';
  
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    iconType = 'rain';
  } else if (conditionLower.includes('cloud')) {
    iconType = 'cloudy';
  } else if (conditionLower.includes('snow')) {
    iconType = 'snow';
  } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
    iconType = 'storm';
  } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
    iconType = 'fog';
  }
  
  // SVG Icons for different weather conditions
  const icons = {
    sunny: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke-width="2" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>`,
    cloudy: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>`,
    rain: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 19v2M11 19v2M15 19v2" />
        </svg>`,
    snow: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17l.5.5m0 0l.5.5m-.5-.5v-2m0 2h2m-2 0H6m9-3l.5.5m0 0l.5.5m-.5-.5v-2m0 2h2m-2 0h-2" />
        </svg>`,
    storm: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>`,
    fog: `<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h16M4 14h16M4 11h16" />
        </svg>`
  };
  
  return icons[iconType];
};
</script>