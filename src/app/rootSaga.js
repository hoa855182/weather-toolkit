import { all, takeLatest } from "redux-saga/effects"
import { getWeatherAsync } from "../Redux/weatherSlice"

export default function* rootSaga() {
    yield all([
        test(),
        getWeatherAsync()
    ])
    // code after all-effect
}

export function* test() {
    yield takeLatest('*', (action)=> {
        console.log('abc');
    });
}