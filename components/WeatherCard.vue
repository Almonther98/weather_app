<template>
    <div class="p-4 text-center">
      <h3 class="text-lg font-medium text-gray-700">{{ title }}</h3>
      <p class="text-2xl font-semibold text-gray-800 mt-2">{{ value || '—' }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    value?: string | null;
  }>();
  </script>