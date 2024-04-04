
import cls from './Search.module.scss';
import {useTranslation} from 'react-i18next';
import {ChangeEvent, memo, useState} from 'react';

interface SearchProps {
    className?: string;
    toSearch: (value: string) => void;
}

export const Search = memo((props: SearchProps) => {
    const {t} = useTranslation();

    const {
        toSearch,
    } = props;

    const [searchCity, setSearchCity] = useState('');
    const [searchDirty, setSearchDirty] = useState(false);
    const [searchError, setSearchError] = useState('Не верное название города.');

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setSearchCity(e.target.value);
        const re = /^[a-z]+((?:[- ][a-z]+)*)+$/i;
        if(!re.test(searchCity)){
            setSearchError('Некорректное название города.')
        } else {
            //setSearchCity(e.target.value)
            setSearchError('')
        }
    }

    const getWeatherInCity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const re = /^[a-zA-Zа-яА-ЯёЁ]+((?:[- ][a-zA-Zа-яА-ЯёЁ]+)*)+$/i;
        if(!re.test(searchCity)){
            setSearchError('Некорректное название города.')
        } else {
            setSearchError('')
            toSearch(searchCity)
            setSearchCity('');
        }
    }

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'city':
                setSearchDirty(true);
                break;
        }
    }

    return (
        <search role="search" className={cls.wrapper}>
            <form method="get">
                {(searchDirty && searchError) && <div className={cls.error}>{searchError}</div>}
                <input
                    onBlur={e => blurHandler(e)}
                    name="city"
                    className={cls.input}
                    value={searchCity}
                    onChange={e => setSearchCity(e.target.value)}
                    type="search"
                    placeholder={t('Город')}
                />
                <button className={cls.btn} onClick={getWeatherInCity}>{t('Узнать погоду')}</button>
            </form>
        </search>
    );
});