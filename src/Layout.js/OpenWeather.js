import ReactWeather, { useOpenWeather } from 'react-open-weather';

const OpenWeather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "ad4089b7305104a6a00c19a555dccd82",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default OpenWeather;
