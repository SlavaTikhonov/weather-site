import {Coordinates, DailyForecastWeather, Weather} from "../../types/weather";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY} from "../../services/WeatherService";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string, thunkAPI) => {
        try {
            const response = await axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить данные о погоде")
        }
    }
)

export const fetchDailyForecast = createAsyncThunk(
    'weather/fetchDailyForecast',
    async (coord: Coordinates, thunkAPI) => {
        try {
            const response = await axios.get<DailyForecastWeather>(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&lang=ru&units=metric&appid=${API_KEY}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить данные о погоде")
        }
    }
)