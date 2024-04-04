import React from "react";
import cls from './MonthStatistics.module.scss';
import {useTranslation} from 'react-i18next';

interface MonthStatisticsProps {
}

export const MonthStatistics = (props: MonthStatisticsProps) => {
    const {t} = useTranslation();


    return (
        <div className={cls.monthStatistics}>
            Month Statistics
        </div>
    );
};