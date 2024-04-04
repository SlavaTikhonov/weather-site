import {DailyForecastState, DailyForecastWeather, Weather, WeatherState} from "../../types/weather";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDailyForecast} from "../action-creators/weather";

const initialState: DailyForecastState = {
    dailyForecastWeather: {
        daily: [
            {
                dt: 1711814400,
                temp: {
                    day: 0,
                    min: 0,
                    max: 40,
                },
                feels_like:{
                    day: 0,
                },
                pressure: 0,
                weather: [
                    {
                        icon: "01n",
                        description: "overcast clouds",
                    }
                ],
                rain: 0,
                wind_speed: 0,
                wind_deg: 0,
            }
        ],
    },
    isLoading: false,
    error: '',
}

export const dailyForecastSlice = createSlice({
    name: 'dailyForecast',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchDailyForecast.fulfilled.type]: (state, action: PayloadAction<DailyForecastWeather>) => {
            state.isLoading = false;
            state.error = '';
            state.dailyForecastWeather = action.payload;
        },
        [fetchDailyForecast.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchDailyForecast.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default dailyForecastSlice.reducer;