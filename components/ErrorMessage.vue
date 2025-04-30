<template>
    <div class="bg-white rounded-lg shadow-lg p-6 text-center">
      <div class="text-red-500 text-lg mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        {{ message || 'Something went wrong' }}
      </div>
      <button 
        @click="$emit('retry')" 
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    message?: string;
  }>();
  
  defineEmits<{
    (e: 'retry'): void;
  }>();
  </script>
  