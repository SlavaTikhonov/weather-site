
export type Weather = {
    coord: {
        lon: number;
        lat: number;
    },
    weather: [
        {
            icon: string;
        }
    ],
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    },
    wind: {
        speed: number;
        deg: number;
    },
    dt: number,
    rain: {
        "1h"?: number;
        "3h"?: number;
    },
    name: string;
};

export type DailyForecastWeather = {
    daily: [
        {
            dt: number,
            temp: {
                day: number;
                min: number;
                max: number;
            },
            feels_like:{
                day: number;
            }
            pressure: number,
            weather: [
                {
                    icon: string;
                    description: string;
                }
            ],
            rain: number,
            wind_speed: number,
            wind_deg: number,
        }
    ]
};

export interface WeatherState {
    weather: Weather,
    isLoading: boolean;
    error: null | string;
}

export interface DailyForecastState {
    dailyForecastWeather: DailyForecastWeather,
    isLoading: boolean;
    error: null | string;
}

export interface Coordinates {
    lon: number;
    lat: number;
}

export enum WeatherActionTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface FetchWeatherAction {
    //type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccessAction {
    //type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    payload: Weather,
}

interface FetchWeatherErrorAction {
    //type: WeatherActionTypes.FETCH_WEATHER_ERROR;
    payload: string;
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction;