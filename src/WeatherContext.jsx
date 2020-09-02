import React, { createContext, useReducer, useContext } from "react";

const WeatherStateContext = createContext();

const WeatherDispatchContext = createContext();

const initialValue = {
  allWeather: {},
  chartData: {},
  forecastItemList: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_WEATHER":
      const weatherCity = action.payload;
      const newAllWeather = { ...state.allWeather, ...weatherCity };
      return { ...state, allWeather: newAllWeather };

    case "SET_FORECAST_ITEM_LIST":
      const forecastCity = action.payload;
      const newForecastCity = { ...state.forecastItemList, ...forecastCity };
      return { ...state, forecastItemList: newForecastCity };
    case "SET_CHART_DATA":
      const chartCity = action.payload;
      const newChartData = { ...state.chartData, ...chartCity };

      return { ...state, chartData: newChartData };
    default:
      return { ...state };
  }
};

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext);
  if (!dispatch) {
    throw Error("Must set dispatch Provider");
  }
  return dispatch;
};

const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext);
  if (!state) {
    throw Error("Must set state Provider");
  }
  return state;
};

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

export { WeatherContext, useWeatherDispatchContext, useWeatherStateContext };
