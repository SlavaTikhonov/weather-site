import React from 'react';
import cls from "./Days.module.scss";
import {Icon} from "../../shared/ui/Icon/Icon";
import {Icons} from "../ThisDay/ThisDay";
import {weatherAPI} from "../../services/WeatherService";
import {Weather} from "../../types/weather";
import {useTranslation} from "react-i18next";
import {useTypedSelector} from "../../shared/lib/hooks/useTypedSelector";
import {popupSlice} from "../../store/reducers/popupSlice";
import {useAppDispatch} from "../../shared/lib/hooks/useAppDispatch";
import {combineReducers} from "redux";

interface WeekProps {
    weather: Weather;
    isSelected: boolean;
}

export interface ForecastCurrentDay  {
    dt: number,
    temp: {
        day: number;
        min: number;
        max: number;
    },
    feels_like:{
        day: number;
    },
    pressure: number,
    weather: [
        {
            icon: string;
            description: string;
        }
    ],
    rain: number,
    wind_speed: number,
    wind_deg: number,
}

interface CurrentSevenDays{
    date: number;
    dayWeek: string;
    nameMonth: string;
}

const WeekForecast = (props: WeekProps) => {
    const {t} = useTranslation();

    const {
        weather,
        isSelected,
    } = props;

    const {
        data: dailyForecastData,
        isError,
        isLoading
    } = weatherAPI.useFetchDailyForecastQuery(weather.coord)

    const DAY_MILSEC = 24 * 60 * 60 * 1000;
    let today = new Date().getTime();
    let currentSevenDays: CurrentSevenDays[] = [];

    function getDay(date: Date) {
        let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        let nameMonth = date.toLocaleString('default', { month: "short" });

        return {
            date: date.getDate(),
            dayWeek: days[date.getDay()],
            nameMonth: nameMonth,
        };
    }
    for (let i = 0; i < 7; i++) {
        let date = new Date(today + DAY_MILSEC * i);
        currentSevenDays[i]=getDay(date)
    }

    let arrayForSort: ForecastCurrentDay[] = [];
    if(dailyForecastData){
        arrayForSort = [...dailyForecastData.daily];
    }

    const {toogleActivePopup,getCurrentDayData, getCurrentNameOfDay} = popupSlice.actions;
    const dispatch = useAppDispatch();

    const doubleDispatch = (data: ForecastCurrentDay, nameDay: string) => {
        dispatch(toogleActivePopup())
        dispatch(getCurrentDayData(data))
        dispatch(getCurrentNameOfDay(nameDay))
    }

    return (
        isSelected &&
        <div className={cls.DaysWrapper}>
            {dailyForecastData &&
                arrayForSort.splice(0,7).map((item, index)=> (
                    <div className={cls.DayWrapper} onClick={() => doubleDispatch(item,currentSevenDays[index].dayWeek)} key={item.dt}>
                        <div className={cls.day}>{t(`${currentSevenDays[index].dayWeek}`)}</div>
                        <div className={cls.dayInfo}>{currentSevenDays[index].date + ' ' + t(`${currentSevenDays[index].nameMonth}`)}</div>
                        <Icon width={48} height={48} Svg={Icons[item.weather[0].icon]}/>
                        <div className={cls.tempDay}>{Math.floor(
                            item.temp.max)}°</div>
                        <div className={cls.tempNight}>{Math.floor(item.temp.min)}°</div>
                        <div className={cls.info}>{t(`${item.weather[0].description}`)}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default WeekForecast;