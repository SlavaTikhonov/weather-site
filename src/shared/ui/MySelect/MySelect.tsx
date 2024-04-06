import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Arrow from "./../../assets/icons/Arrow-down.svg";
import cls from "./MySelect.module.scss";
import {Icon} from "../Icon/Icon";
import {classNames} from "../../lib/classNames/classNames";


export interface MySelectOption<T extends string> {
    value: T;
    name: T;
}

interface MySelectProps<T extends string> {
    defaultValue: string,
    name?: T;
    options?: MySelectOption<T>[];
    onChange?: (value: T) => void;
    className?: string;
}

export const MySelect = <T extends string>(props: MySelectProps<T>) => {
    const {
        options,
        defaultValue,
        onChange,
        name,
    } = props;

    const [isActiveSelect, setIsActiveSelect] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    let selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            // @ts-ignore
            if (!selectRef.current.contains(event.target)){
                setIsActiveSelect(false);
            }
        })
        let menuBurger = document.getElementById('menuBurger');
        if(menuBurger){
            menuBurger.addEventListener("click", (event) => {
                // @ts-ignore
                if (!selectRef.current.contains(event.target)){
                    setIsActiveSelect(false);
                }
            })
        }
    }, []);

    const flipArrow = () => {
        isActiveSelect?
            setIsActiveSelect(false):
            setIsActiveSelect(true)
    }


    return (
        <div  className={cls.selectWrapper}>
            <select
                ref={selectRef}
                onChange={onChangeHandler}
                onClick={flipArrow}
                defaultValue={defaultValue}>
                {options?.map(option =>
                    <option className={cls.option} value={option.value} key={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
            <span className={classNames(cls.selectArrow,{[cls.isActiveSelect]: isActiveSelect},[])}>
                <Icon Svg={Arrow} width={13} height={13}/>
            </span>
        </div>
    );
};

export default MySelect;