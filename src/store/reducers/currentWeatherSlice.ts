import {Weather, WeatherAction, WeatherActionTypes, WeatherState} from "../../types/weather";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchWeather} from "../action-creators/weather";


const initialState: WeatherState = {
    weather: {
        coord: {
            lon: 50.2212,
            lat: 53.2415,
        },
        weather: [
            {
                icon: "01n",
            }
        ],
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
        },
        rain: {
            "3h": 0,
        },
        wind: {
            speed: 0,
            deg: 0,
        },
        dt: 0,
        name: "Санкт-Петербург"
    },
    isLoading: false,
    error: '',
}

export const currentWeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchWeather.fulfilled.type]: (state, action: PayloadAction<Weather>) => {
            state.isLoading = false;
            state.error = '';
            state.weather = action.payload;
        },
        [fetchWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default currentWeatherSlice.reducer;
