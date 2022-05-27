import { Grid, Paper, Container, TextField, Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from "@mui/styles";

import Sidebar from './Sidebar';
import BannerR from './BannerR';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAsync } from '../Redux/weatherSlice';
import { selectWeather,selectState } from '../Redux/weatherSlice';
import { CircularProgress } from '@mui/material';
// import { getWeatherAsync } from '../Redux/WeatherReducer';
const useStyles = makeStyles({
    div: {
        
    }
})



function Main() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWeatherAsync())
    }, [])
    

    
    return (
        <div>
            <Container fixed>
                <Grid
                    container
                    pt={4}
                    className={classes.div}
                >
                    <Sidebar />
                    <BannerR />

                </Grid>
            </Container>
        </div>
    );
}

export default Main;