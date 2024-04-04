import React from 'react';
import cls from './ThisDay.module.scss';
import {Icon} from "../../shared/ui/Icon/Icon";
import {Weather} from "../../types/weather";
import MainlyCloudy from './../../shared/assets/icons/Mainly-cloudy.svg';
import Rain from './../../shared/assets/icons/Rain.svg';
import SmallRainSun from './../../shared/assets/icons/Small-rain-sun.svg';
import Thunderstorm from './../../shared/assets/icons/Thunderstorm.svg';
import Snow from './../../shared/assets/icons/Snow.svg';
import Mist from './../../shared/assets/icons/Mist.svg';
import Sunny from './../../shared/assets/icons/Sunny.svg';
import FewCloud from './../../shared/assets/icons/FewCloud.svg';
import {useTranslation} from "react-i18next";

interface ThisDayProps {
    weather: Weather;
}

type IconsTypesListType = {
    [key: string]: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icons: IconsTypesListType = {
    "01d": Sunny,
    "02d": FewCloud,
    "03d": MainlyCloudy,
    "04d": MainlyCloudy,
    "09d": Rain,
    "10d": SmallRainSun,
    "11d": Thunderstorm,
    "13d": Snow,
    "50d": Mist,
    "01n": Sunny,
    "02n": FewCloud,
    "03n": MainlyCloudy,
    "04n": MainlyCloudy,
    "09n": Rain,
    "10n": SmallRainSun,
    "11n": Thunderstorm,
    "13n": Snow,
    "50n": Mist,
}

const ThisDay = (props: ThisDayProps) => {
    const {t} = useTranslation();
    const {
        weather
    } = props;

    let WeatherIconId: string = weather.weather[0].icon;
    let currentWeatherTime: Date = new Date(weather.dt * 1000);
    let hour = currentWeatherTime.getHours();
    let getMinute = currentWeatherTime.getMinutes();
    let minute = (getMinute < 10)? '0' + getMinute : getMinute ;
    let resultTime = hour + ':' + minute;

    return (
        <div className={cls.wrapper}>
            <div className={cls.top__block}>
                <div className={cls.top__column}>
                    <div className={cls.temp}>
                        {
                            Math.floor(weather.main.temp)
                        }°
                    </div>
                    <div className={cls.day}>{t('Сегодня')}</div>
                </div>
                <div className={cls.icon}>
                    <Icon Svg={Icons[WeatherIconId]} />
                </div>
            </div>
            <div className={cls.bottom__block}>
                <div className={cls.time}>
                    {t('Время')}: <span>{resultTime}</span>
                </div>
                <div className={cls.city}>
                    {t('Город')}: <span>{t(`${weather.name}`)}</span>
                </div>
            </div>
        </div>
    );
};

export default ThisDay;