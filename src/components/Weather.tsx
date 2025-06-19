import { useWeatherByLocation } from '../hooks/useWeatherByLocation'

const Weather = () => {
  const { data, isLoading, error } = useWeatherByLocation()

  const meteo = data
  // console.log('meteo', data)
  if (isLoading) <h1>Carregando</h1>
  if (error) <h1>Error:${error}</h1>

  return (
    <div>
      <h1>meteo</h1>

      {meteo?.condition && (
        <div>
          <h1 className="text-2xl font-bold ml-6 mt-6">Forecast</h1>
          <h1 className="text-xl ml-6 mt-6">Cloud: {meteo.cloud}</h1>
          <h1 className="text-xl ml-6 my-2">Humidity: {meteo.humidity}%</h1>
          <h1 className="text-xl ml-6 my-2">
            Wind Speed: {meteo.wind_kph} km/h
          </h1>
          <h1 className="text-xl ml-6 my-2">Temperature: {meteo.temp_c}°C</h1>
          <h1 className="text-xl ml-6 my-2">
            Precipitation: {meteo.precip_mm} mm
          </h1>
          {/* Acedendo ao icon da condição */}
          <img src={meteo.condition.icon} alt="Weather icon" />
        </div>
      )}
    </div>
  )
}
export default Weather
