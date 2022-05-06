import React, {useState ,useEffect} from "react";
import {WeeklyWeather} from "./WeeklyWeather";




export const FavoritePage =(props)=> {

    return (
        <div>
            <WeeklyWeather
                handleDaySelection={props.handleDaySelection}
                selectedDay={props.selectedDay}
                selectedCity={props.selectedCity}
                weatherData={props.weatherData}
                todayData={props.todayData}
            />
        </div>

);
}
