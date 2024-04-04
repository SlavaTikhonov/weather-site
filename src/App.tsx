import React, {Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import Header from "./widgets/Header/Header";
import './styles/index.scss'
import {useTheme} from "./shared/lib/hooks/useTheme";
import {Popup} from "./widgets/Popup/Popup";
import {Search} from "./widgets/Search/Search";
import {useTypedSelector} from "./shared/lib/hooks/useTypedSelector";
import {popupSlice} from "./store/reducers/popupSlice";
import {useAppDispatch} from "./shared/lib/hooks/useAppDispatch";


function App() {
    const {theme, toggleTheme} = useTheme();

    const [currentCity, setCurrentCity] = useState('petersburg');

    const handleChange = (city: string) => {
        setCurrentCity(city)
        console.log(currentCity)
    }

    const isActivePopup = useTypedSelector(state => state.popupReducer.isActivePopup)

    // document.body.style("")

    if(isActivePopup) {
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "auto";
    }
    // const {setIsActivePopup} = popupSlice.actions;
    // const dispatch = useAppDispatch();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                {isActivePopup && <Popup city={currentCity}/>}
                <div className={"container"}>
                    <Header onChange={handleChange}/>
                    <Search toSearch={handleChange}/>
                    <Routes>
                        <Route path={'/'} element={<Main currentCity={currentCity}/>}></Route>
                        <Route path={'/month-statistics'} element={<MonthStatistics/>}></Route>
                    </Routes>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
