import {combineReducers} from "redux";
import { configureStore} from "@reduxjs/toolkit";
import currentWeatherReducer from "./reducers/currentWeatherSlice";
import dailyForecastReducer from "./reducers/dailyForecastSlice";
import popupReducer from "./reducers/popupSlice";
import {weatherAPI} from "../services/WeatherService";

const rootReducer = combineReducers({
    currentWeatherReducer,
    dailyForecastReducer,
    popupReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherAPI.middleware)
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];