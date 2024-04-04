import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Coordinates, DailyForecastWeather, Weather} from "../types/weather";

export const API_KEY: string = "d22b1f7de4d1d705bad575896351e09f";

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({baseUrl: `https://api.openweathermap.org/data/2.5/`}),
    endpoints: (build) => ({
        fetchWeather: build.query<Weather, string>({
            query: (city: string = 'moscow') => ({
                url: `weather?q=${city}&units=metric&appid=${API_KEY}`,
                params: {
                    city: city,
                }
            })
        }),
        fetchDailyForecast: build.query<DailyForecastWeather, Coordinates>({
            query: (coordinates: Coordinates) => ({
                url: `onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&lang=ru&units=metric&appid=${API_KEY}`,
                params: {
                    latitude: coordinates.lat,
                    longitude: coordinates.lon,
                }
            })
        })
    })





























































})