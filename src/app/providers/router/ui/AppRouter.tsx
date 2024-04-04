import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "../../../../pages/Main/Main";
import {MonthStatistics} from "../../../../pages/MonthStatistics/MonthStatistics";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element="<Main/>"/>
            <Route path={"/month-statistics"} element={<MonthStatistics/>}/>
            <Route path={"*"} element="<Main/>"/>
        </Routes>
    );
};

export default AppRouter;