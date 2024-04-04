import React, {useEffect, useState} from 'react';
import cls from './Header.module.scss';
import {Icon} from "../../shared/ui/Icon/Icon";
import WeatherIcon from '../../shared/assets/icons/Header-logo.svg';
import ThemeSwitcher from "../../shared/assets/icons/ThemeSwitcher.svg";
import {useTheme} from "../../shared/lib/hooks/useTheme";
import {LangSwitcher} from "../../features/LangSwitcher/LangSwitcher";
import MySelect from "../../shared/ui/MySelect/MySelect";
import {useTranslation} from "react-i18next";
import {classNames} from "../../shared/lib/classNames/classNames";
import {MenuBurger} from "../MenuBurger/MenuBurger";

interface HeaderProps {
    onChange: (value: string) => void;
}

const Header = (props: HeaderProps) => {
    const {t} = useTranslation();
    const {
        onChange,
    } = props;

    const {theme, toggleTheme} = useTheme();

    const [menuActive, setMenuActive] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: Event ) => {
            const target = event.target as Window
            setWidth(target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const options = [
        { value: 'petersburg', name: t('Санкт-Петербург') },
        { value: 'samara', name: t('Самара')},
        { value: 'astrakhan', name: t('Астрахань')},
    ];

    return (
        <header className={classNames(cls.wrapper, {[cls.activeHeader]: menuActive}, [])}>
            <div className={cls.left}>
                <div className={cls.logo}>
                    <Icon Svg={WeatherIcon}/>
                </div>
                <div className={cls.title}>
                    {t('НАША ПОГОДА')}
                </div>
            </div>
            <MenuBurger
                items={[
                    {
                        item: <LangSwitcher/>,
                        id: 1,
                    },
                    {
                        item: <div className={cls.toggle} onClick={toggleTheme}>
                            <Icon Svg={ThemeSwitcher} width={37} height={37}/>
                        </div>,
                        id: 2,
                    },
                    {
                        item: <MySelect
                            onChange={onChange}
                            defaultValue={t('Санкт-Петербург')}
                            options={options}
                        />,
                        id: 3,
                    }
                ]}
                title={t('Опции')} active={menuActive} setActive={setMenuActive}
            />
            {(width < 741) ?
                <button
                    className={classNames(cls.burgerBtn, {[cls.burgerBtnActive]: menuActive}, [])}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span className={cls.burgerBtn__firstLine}/>
                    <span className={cls.burgerBtn__secondLine}/>
                    <span className={cls.burgerBtn__thirdLine}/>
                    <span className={cls.burgerBtn__fourthLine}/>
                </button>
                :
                <div className={cls.right}>
                    <LangSwitcher/>
                    <div className={cls.toggle} onClick={toggleTheme}>
                        <Icon Svg={ThemeSwitcher} width={37} height={37}/>
                    </div>
                    <MySelect
                        //value={city}
                        onChange={onChange}
                        defaultValue={t('Санкт-Петербург')}
                        options={options}
                    />
                </div>
            }
        </header>
    );
};

export default Header;