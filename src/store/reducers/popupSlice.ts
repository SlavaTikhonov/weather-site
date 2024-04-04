import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DailyForecastWeather} from "../../types/weather";
import {ForecastCurrentDay} from "../../widgets/ForecastWeather/WeekForecast";



interface PopupState {
    isActivePopup: boolean;
    data: ForecastCurrentDay;
    dayName: string;
}

const initialState: PopupState = {
    isActivePopup: false,
    data:
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
        },
    dayName: "Среда",
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        toogleActivePopup(state){
            state.isActivePopup = !state.isActivePopup;
        },
        getCurrentDayData(state,action: PayloadAction<ForecastCurrentDay>){
            state.data = action.payload;
        },
        getCurrentNameOfDay(state,action: PayloadAction<string>) {
            switch (action.payload){
                case "Пн":
                    state.dayName = "Понедельник";
                    break;
                case "Вт":
                    state.dayName = "Вторник";
                     break;
                case "Ср":
                    state.dayName = "Среда";
                     break;
                case "Чт":
                    state.dayName = "Четверг";
                     break;
                case "Пт":
                    state.dayName = "Пятница";
                     break;
                case "Сб":
                    state.dayName = "Суббота";
                     break;
                case "Вс":
                    state.dayName = "Воскресенье";
                     break;
                default:
                    state.dayName = "Среда";
            }
        },
    }
})

export default popupSlice.reducer;