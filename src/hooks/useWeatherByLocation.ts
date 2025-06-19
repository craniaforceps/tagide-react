import { useQuery } from '@tanstack/react-query'
import { fetchWeatherByLocation } from '../services/meteo'

export const useWeatherByLocation = () => {
  return useQuery({
    queryKey: ['weatherByLocation'],
    queryFn: fetchWeatherByLocation,
    retry: 2, // Retry failed requests twice
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  })
}
