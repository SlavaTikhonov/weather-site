import React, { memo } from 'react';
import cls from './Icon.module.scss';
import MainlyCloudy from './../../assets/icons/Mainly-cloudy.svg';
import Rain from './../../assets/icons/Rain.svg';
import SmallRainSun from './../../assets/icons/Small-rain-sun.svg';
import Thunderstorm from './../../assets/icons/Thunderstorm.svg';
import Snow from './../../assets/icons/Snow.svg';
import Mist from './../../assets/icons/Mist.svg';
import Sunny from './../../assets/icons/Sunny.svg';
import FewCloud from './../../assets/icons/FewCloud.svg';



interface IconProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    //id: string;
}



export const Icon = memo((props: IconProps) => {

    const {
        Svg,
        width,
        height,
    } = props;

    return (
        <Svg
            className={cls.icon}
            widths={width}
            height={height}
        />
    );
});