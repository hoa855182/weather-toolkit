import { call, put, takeEvery } from 'redux-saga/effects'
import types from '../const/types';
import WeatherApi from '../apis/WeatherApi';

async function fetchAsync(city = '') {

    let lat = 0, lon = 0;


    if (city === '') {
        const currentPostion = await CurrentPositon();
        lat = currentPostion[0];
        lon = currentPostion[1];

    }
    else {
        const position = await name.GET_LATLON({ q: city })
        console.log(position)
        lat = position.lat
        lon = position.lon

    }
    const weather = await WeatherApi.GET({ lat: lat, lon: lon });
    const cityname = await name.GET({ lat, lon });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(weather)
    return { ...weather, cityName: cityname }
}

export function* getWeather(){
    try {
        const users = yield fetchAsync();

        yield put({ type: LOAD_USERS_SUCCESS, data: users });
    } catch (e) {
        yield put({ type: LOAD_USERS_ERROR, error: e.message });
    }
}
export function* getWeatherAsync() {
    yield takeEvery('GET_WEATHER', types.GET_WEATHER)
}
