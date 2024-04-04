import React from 'react';
import cls from './ThisDayInfo.module.scss';
import {Icon} from "../../shared/ui/Icon/Icon";
import Cloud from "./../../shared/assets/icons/Cloud.svg";
import Temp from "./../../shared/assets/icons/Temp.svg";
import Pressure from "./../../shared/assets/icons/Pressure.svg";
import Wind from "./../../shared/assets/icons/Wind.svg";
import Precipitation from "./../../shared/assets/icons/Precipitation.svg";
import ThisDayItem from "./ThisDayItem";
import {Weather} from "../../types/weather";
import {useTranslation} from "react-i18next";
import {calculateWindDirection} from "../../shared/lib/hooks/useCalculateWindDirection";

interface ThisDayInfoProps {
    weather: Weather,
}

export interface Item {
    icon_id: React.VFC<React.SVGProps<SVGSVGElement>>,
    name: string,
    value: string,
}

const ThisDayInfo = (props:ThisDayInfoProps) => {
    const {t} = useTranslation();

    const {
        weather,
    } = props;

    let windDirection = calculateWindDirection(weather.wind.deg);

    const items: Item[] = [
        {
            icon_id: Temp,
            name: t('Температура'),
            value: `${ Math.floor(weather.main.temp)}° - ${t('ощущается как')} ${Math.floor(weather.main.feels_like)}°.`,
        },
        {
            icon_id: Pressure,
            name: t('Давление'),
            value: `${ Math.floor(weather.main.pressure)} ${t('мм ртутного столба')}.`,
        },
        {
            icon_id: Precipitation,
            name: t('Осадки'),
            value: `${
                weather.rain?
                    (weather.rain["3h"]?
                            weather.rain["3h"] :
                            weather.rain["1h"]
                    )+t(' мм') :
                    t('Без осадков')
            }.`,
        },
        {
            icon_id: Wind,
            name: t('Ветер'),
            value: `${ Math.floor(weather.wind.speed)} ${t('м/с; ')} ${t(`${windDirection}`)}.`,
        },
    ]

    return (
        <div className={cls.wrapper}>
            <div className={cls.backImage}>
                <Icon Svg={Cloud}/>
            </div>
            <ul className={cls.column}>
                {items.map((item: Item) =>
                    <ThisDayItem key={item.value} item={item}/>
                )}
            </ul>
        </div>
    );
};

export default ThisDayInfo;