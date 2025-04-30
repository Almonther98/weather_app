<template>
    <div class="max-w-md w-full">
      <div v-if="error" class="w-full">
        <ErrorMessage :message="error" @retry="fetchWeatherData" />
      </div>
      <div v-else-if="loading" class="w-full flex justify-center">
        <LoadingSpinner />
      </div>
      <Dashboard v-else-if="weatherData" :weather="weatherData" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
import { useLocation } from '~/composables/useLocation';
import { useWeather } from '~/composables/useWeather';
  
  interface WeatherData {
    current: {
      temp: number;
      condition: string;
      date: Date;
      humidity: number;
      wind: number;
      precipitation: number;
      pressure: number;
    }
  }
  
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);
  const weatherData = ref<WeatherData | null>(null);
  
  const { getLocation } = useLocation();
  const { fetchWeather } = useWeather();
  
  const fetchWeatherData = async (): Promise<void> => {
    loading.value = true;
    error.value = null;
    
    try {
      // Get user location
      const { latitude, longitude, city } = await getLocation();
      
      // Fetch weather data based on location
      const data = await fetchWeather(latitude, longitude, city || '');
      weatherData.value = data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = 'Failed to fetch weather data';
      }
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch weather data when component mounts
  onMounted(fetchWeatherData);
  </script>