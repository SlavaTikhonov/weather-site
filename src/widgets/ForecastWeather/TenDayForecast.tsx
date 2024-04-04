import React from 'react';
import {classNames} from "../../shared/lib/classNames/classNames";
import cls from "./Days.module.scss";
import {useTranslation} from "react-i18next";

interface TenDayForecastProps {
    isSelected: boolean;
}


const TenDayForecast = (props: TenDayForecastProps) => {
    const {t} = useTranslation();
    const {
        isSelected
    } = props;


    return (
        isSelected &&
        <div className={classNames(cls.tenDays, {}, [])}>
            {t('No forecast')}.
        </div>
    );
};

export default TenDayForecast;