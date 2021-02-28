import React from "react";

const WeatherDisplay = ({ weather }) => {
    const { main: { temp, pressure } = {} } = weather;

    return (
        <div className={"weather__weather-dipslay"}>
            {` Temperature ${temp.toFixed(1)} ℃ Pressure ${pressure} hPa`}
        </div>
    );
};

export default WeatherDisplay;
