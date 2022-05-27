import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// import weatherReducer from '../Redux/WeatherReducer'
import weatherReducer from '../Redux/weatherSlice'





export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    
  },
  
});




