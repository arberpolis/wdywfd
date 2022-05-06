import React, { Fragment } from 'react';
import { ForecastQueryInput } from './ForecastQueryInput';
import { useFetchWeatherQuery } from './weatherSlice';

function ForecastView(props: ForecastQueryInput) {
  const { data: weatherForecastData = [], isFetching } = useFetchWeatherQuery(props);

  return (
    <Fragment>
      <h1>Forecast</h1>
      {
        isFetching
          ? (<Fragment>Loading...</Fragment>)
          : weatherForecastData.map((item) => (
            <Fragment key={item.dt}>
              <span>{item.clouds.all}</span>
              <span>{item.main.humidity}</span>
              <span>{item.main.temp_min}</span>
              <span>{item.main.temp_max}</span>
            </Fragment>
          ))
      }
    </Fragment>
  );
}

export default ForecastView;
