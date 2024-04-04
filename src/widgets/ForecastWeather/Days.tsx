import React, {useState} from 'react';
import Tabs from "./Tabs";
import {Weather} from "../../types/weather";
import WeekForecast from "./WeekForecast";
import TenDayForecast from "./TenDayForecast";
import MonthForecast from "./MonthForecast";

interface DaysProps {
    weather: Weather,
}


const Days = (props: DaysProps) => {

    const {
        weather,
    } = props;

    const [currentTabName, setCurrentTabName] = useState("week");

    const handleChange = (tabName: string) => {
        setCurrentTabName(tabName)
    }

    return (
        <>
            <Tabs onChange={handleChange}/>
            <WeekForecast weather={weather} isSelected={currentTabName === "week"}/>
            <TenDayForecast isSelected={currentTabName === "tenDay"}/>
            <MonthForecast isSelected={currentTabName === "month"}/>
        </>
    );
};

export default Days;