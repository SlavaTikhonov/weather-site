import React from 'react';
import {Item} from "./ThisDayInfo";
import {Icon} from "../../shared/ui/Icon/Icon";
import Temp from "../../shared/assets/icons/Temp.svg";
import cls from './ThisDayInfo.module.scss';

interface ItemProps {
    item: Item;
}


const ThisDayItem = (props: ItemProps) => {
    const {
        item
    } = props;

    return (
        <li className={cls.item}>
            <div className={cls.icon}>
                <Icon Svg={item.icon_id}/>
            </div>
            <div className={cls.name}>{item.name}</div>
            <div className={cls.info}>{item.value}</div>
        </li>
    );
};

export default ThisDayItem;