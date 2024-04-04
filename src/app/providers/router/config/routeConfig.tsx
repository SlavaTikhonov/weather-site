import {RouteProps} from "react-router-dom";
import {MonthStatistics} from "../../../../pages/MonthStatistics/MonthStatistics";
import {Main} from "../../../../pages/Main/Main";
import React from "react";

export enum AppRoutes {
  MAIN = 'main',
  MONTH_STATISTICS = 'statistics',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MONTH_STATISTICS]: '/month-statistics',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: "<Main/>"
  },
  [AppRoutes.MONTH_STATISTICS]: {
    path: RoutePath.statistics,
    element: <MonthStatistics/>
  },
}
