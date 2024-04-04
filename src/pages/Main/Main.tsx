import React from 'react';
import cls from './Main.module.scss';
import ThisDay from "../../widgets/ThisDay/ThisDay";
import ThisDayInfo from "../../widgets/ThisDayInfo/ThisDayInfo";
import Days from "../../widgets/ForecastWeather/Days";
import {weatherAPI} from "../../services/WeatherService";
import {useTranslation} from "react-i18next";

interface MainProps {
    currentCity: string;
}

export const Main = (props: MainProps) => {
    const {t} = useTranslation();
    const {
        currentCity,
    } = props

    const {
        data: weatherData,
        isError,
        isLoading
    } = weatherAPI.useFetchWeatherQuery(currentCity)

    return (
       <div className={cls.main}>
           {isLoading && <h1>{t('Загрузка')}...</h1>}
           {isError && <h1>{t('Не удалось загрузить погоду')}.</h1> }
           {weatherData && !isError &&
               <>
                   <div className={cls.wrapper}>
                       <ThisDay weather={weatherData}/>
                       <ThisDayInfo weather={weatherData}/>
                   </div>
                   <Days weather={weatherData}/>
               </>
           }
       </div>
    );
};
