import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Forecast } from './Forecast';
import { GeoCoding } from './GeoCoding';
import { GeoCodingQueryInput } from './GeoCodingQueryInput';
import { ForecastQueryInput } from './ForecastQueryInput';

const API_KEY = '8b9c7fac2db6d023c536e13a8ed973cc';

export const weatherSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org',
    prepareHeaders: (headers) => {
      headers.set(
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      );
      return headers;
    },
    mode: 'cors',
  }),
  endpoints(builder) {
    return {
      fetchWeatherGeoCoding: builder.query<
        GeoCoding[],
        GeoCodingQueryInput
      >({
        query(input: GeoCodingQueryInput): FetchArgs {
          const { cityName, countryCode, limit = 10, stateCode } = input;
          const fetchArgs = {
            url: `/geo/1.0/direct?limit=${limit}&appid=${API_KEY}`,
          }
          let queryStringParam = `${cityName}${',' + stateCode || ''},${countryCode}`;
          Object.assign(fetchArgs, {
            url: `${fetchArgs.url}&q=${queryStringParam}`,
          });
          return fetchArgs;
        },
      }),
      fetchWeather: builder.query<Forecast[], ForecastQueryInput>({
        query(input: ForecastQueryInput): FetchArgs {
          const fetchArgs = {
            url: `data/2.5/weather?lat=${input.lat}&lon=${input.lon}&appid=${API_KEY}`,
          };
          if (input.mode) {
            Object.assign(fetchArgs, {
              url: `${fetchArgs.url}&mode=${input.mode}`,
            });
          }
          if (input.units) {
            Object.assign(fetchArgs, {
              url: `${fetchArgs.url}&units=${input.units}`,
            });
          }
          if (input.lang) {
            Object.assign(fetchArgs, {
              url: `${fetchArgs.url}&lang=${input.lang}`,
            });
          }
          return fetchArgs;
        },
      }),
    };
  },
  reducerPath: 'weatherApi',
});

export const { useFetchWeatherGeoCodingQuery, useFetchWeatherQuery } = weatherSlice;
