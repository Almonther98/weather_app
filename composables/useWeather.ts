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
    location: {
      name: string;
      region: string;
      country: string;
    }
  }
  
  interface WeatherAPIResponse {
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      humidity: number;
      wind_mph: number;
      wind_kph: number;
      precip_mm: number;
      precip_in: number;
      pressure_mb: number;
      pressure_in: number;
      last_updated: string;
    };
    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
    };
  }
  
  export const useWeather = () => {
    const config = useRuntimeConfig();
    
    const fetchWeather = async (latitude: number, longitude: number , city: string): Promise<WeatherData> => {
      try {
        // For this example, we'll use OpenWeatherMap API
        // You'll need to set up API_KEY in your .env file
        const API_KEY = config.public.weatherApiKey || '3d9d6b00173f4017a5f152806252904';
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Weather data unavailable');
        }
        
        const data = await response.json() as WeatherAPIResponse;
        console.log(data);
        
        // Transform the API response to our app's format
        return {
          current: {
            temp: data.current.temp_c, // Using Fahrenheit as in the original
            condition: data.current.condition.text,
            date: new Date(),
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
        console.error('Error fetching weather:', error);
        throw new Error('Failed to fetch weather data');
      }
    };
  
    return {
      fetchWeather
    };
  };