import React, {useState} from 'react';
import cls from "./Days.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../shared/lib/classNames/classNames";

interface  TabsProps {
    onChange: (value: string) => void;
}

const Tabs = (props: TabsProps) => {
    const {t} = useTranslation();

    const {
        onChange,
    } = props;

    const [ActiveTab, setActiveTab] = useState("week");

    const toggleTab = (name: string) => {
        setActiveTab(name);
    }

    onChange(ActiveTab);

    const tabs = [
        {
            name: "week",
            value: 'На неделю',
        },
        {
            name: "tenDay",
            value: 'На 10 дней',
        },
        {
            name: "month",
            value: 'На месяц',
        },
    ]

    return (
        <div className={cls.TabsWrapper}>
            <div className={cls.TabsBody}>
                {tabs.map((tab) =>
                <div
                    className={classNames(cls.tab,{[cls.isActiveTab]: (ActiveTab === tab.name)},[])}
                    key={tab.name}
                    onClick={() => toggleTab(tab.name)}
                >
                    {t(`${tab.value}`)}
                </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;