const useLocation = () => {
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!(void 0).geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
        return;
      }
      (void 0).geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`).then((response) => response.json()).then((data) => {
            const cityName = data.address.city || data.address.town || data.address.village || data.address.municipality || data.address.county || "Unknown";
            const stateName = data.address.state || data.address.province || "Unknown";
            resolve({
              ...coords,
              city: `${cityName}, ${stateName}`
            });
          }).catch(() => {
            resolve(coords);
          });
        },
        (error) => {
          let errorMessage;
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access is required to fetch weather data";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable";
              break;
            case error.TIMEOUT:
              errorMessage = "Request to get location timed out";
              break;
            default:
              errorMessage = "An unknown error occurred";
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
export {
  useLocation
};
//# sourceMappingURL=useLocation.mjs.map
