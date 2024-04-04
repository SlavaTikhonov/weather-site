import cls from './MenuBurger.module.scss';
import {classNames} from "../../shared/lib/classNames/classNames";
import {ReactNode} from "react";
interface ItemsReactNode {
    item: ReactNode;
    id: number;
}

interface MenuBurgerProps {
    title?: string;
    items: ItemsReactNode[];
    active: boolean;
    setActive: (b: boolean) => void ;
}

export const MenuBurger = (props: MenuBurgerProps) => {
    const {
        title,
        items,
        active,
        setActive,
    } = props;
    return (
        <div
            className={classNames(cls.menuBurger,{[cls.active]:active},[])}
            onClick={()=> setActive(false)}
        >
           <div className={classNames(cls.blur,{},[])}/>
            <div
                className={classNames(cls.menuBurger__content,{},[])}
                onClick={(e)=> e.stopPropagation()}
            >
                <div className={classNames(cls.menuBurger__title,{},[])}>{title}</div>
                <ul className={classNames(cls.menuBurger__items,{},[])}>
                    {items.map(item =>
                        <li key={item.id} className={classNames(cls.menuBurger__item,{},[])}>
                            {item.item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
