interface LocationCoordinates {
    latitude: number;
    longitude: number;
    city?: string;
  }

  export const useLocation = () => {
    const getLocation = (): Promise<LocationCoordinates> => {
      return new Promise<LocationCoordinates>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation is not supported by your browser'));
          return;
        }
  
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            
            // Reverse geocoding to get city and state names
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`)
              .then(response => response.json())
              .then(data => {
              const cityName = data.address.city || 
                   data.address.town || 
                   data.address.village ||
                   data.address.municipality ||
                   data.address.county ||
                   'Unknown';
              const stateName = data.address.state ||
                   data.address.province ||
                   'Unknown';
              resolve({
              ...coords,
              city: `${cityName}, ${stateName}`
              });
              })
              .catch(() => {
              // If geocoding fails, resolve with coordinates only
              resolve(coords);
              });
            },
            (error: GeolocationPositionError) => {
            let errorMessage: string;
            switch (error.code) {
              case error.PERMISSION_DENIED:
                errorMessage = 'Location access is required to fetch weather data';
                break;
              case error.POSITION_UNAVAILABLE:
                errorMessage = 'Location information is unavailable';
                break;
              case error.TIMEOUT:
                errorMessage = 'Request to get location timed out';
                break;
              default:
                errorMessage = 'An unknown error occurred';
            }
            reject(new Error(errorMessage));
          }
        );
      });
    };
  
    return {
      getLocation
    };
  };

  