import React from 'react';
import cls from "./Days.module.scss";
import {classNames} from "../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface MonthForecastProps {
    isSelected: boolean;
}

const MonthForecast = (props:MonthForecastProps) => {
    const {t} = useTranslation();
    const {
        isSelected
    } = props;

    return (
        isSelected &&
        <div className={classNames(cls.month, {}, [])}>
            {t('No forecast')}.
        </div>
    );
};

export default MonthForecast;