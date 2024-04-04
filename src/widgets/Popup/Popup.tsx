import cls from './Popup.module.scss';
import {Item} from "../ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../ThisDayInfo/ThisDayItem";
import React from "react";
import Temp from "../../shared/assets/icons/Temp.svg";
import Pressure from "../../shared/assets/icons/Pressure.svg";
import Precipitation from "../../shared/assets/icons/Precipitation.svg";
import Wind from "../../shared/assets/icons/Wind.svg";
import Close from "../../shared/assets/icons/Close.svg";
import SmallRainSun from "../../shared/assets/icons/Small-rain-sun.svg";
import {Icon} from "../../shared/ui/Icon/Icon";
import {popupSlice} from "../../store/reducers/popupSlice";
import {useAppDispatch} from "../../shared/lib/hooks/useAppDispatch";
import {useTypedSelector} from "../../shared/lib/hooks/useTypedSelector";
import {Icons} from "../ThisDay/ThisDay";
import {useTranslation} from "react-i18next";
import {calculateWindDirection} from "../../shared/lib/hooks/useCalculateWindDirection";


interface PopupProps {
    city: string;
}

export const Popup = (props: PopupProps) => {
    const {t} = useTranslation();
    const {
        city
    } = props;

    const {
        data,
        dayName,
        // temp ,feels_like, pressure, weather, rain, wind_speed, wind_deg,

    } = useTypedSelector(state => state.popupReducer)

    let windDirection = calculateWindDirection(data.wind_deg);

    const items: Item[] = [
        {
            icon_id: Temp,
            name: t('Температура'),
            value: `${Math.floor(data.temp.day)}° - ${t('ощущается как')} ${Math.floor(data.feels_like.day)}°`,
        },
        {
            icon_id: Pressure,
            name: t('Давление'),
            value: `${data.pressure + t("мм ртутного столба")}.`,
        },
        {
            icon_id: Precipitation,
            name: t('Осадки'),
            value: `${
                data.rain?
                    data.rain + t(' мм') :
                    t('Без осадков')
            }`,
        },
        {
            icon_id: Wind,
            name: t('Ветер'),
            value: `${data.wind_speed} ${t("м/с; ")} ${t(`${windDirection}`)}`,
        },
    ]


    const {toogleActivePopup} = popupSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className={cls.wrapper}>
            <div className={cls.blur} onClick={() => dispatch(toogleActivePopup())}></div>
            <div className={cls.Popup}>
                <div className={cls.day}>
                    <div className={cls.day__temp}>{Math.floor(data.temp.day)}°</div>
                    <div className={cls.day__name}>{t(`${dayName}`)}</div>
                    <div className={cls.day__weatherIcon}><Icon Svg={Icons[data.weather[0].icon]}/></div>
                    {/*<div className={cls.day__time}>*/}
                    {/*    Время: <span>21:54</span>*/}
                    {/*</div>*/}
                    <div className={cls.day__city}>
                        {t("Город")}: <span>{t(`${city}`)}</span>
                    </div>
                </div>
                <ul className={cls.column}>
                    {items.map((item: Item) =>
                        <ThisDayItem key={item.value} item={item}/>
                    )}
                </ul>
                <div className={cls.close} onClick={() => dispatch(toogleActivePopup())}>
                    <Icon Svg={Close}/>
                </div>
            </div>
        </div>
    );
};