import React, { Component } from "react";
import { connect } from 'react-redux';

import { List } from "./list/List";
import { Input } from "./elements/Input";
import { Button } from "./elements/Button";

import { addCity, removeCity, setActiveCity } from "../actions/cities";
import { setWeather } from "../actions/weather";

import WeatherDisplay from "./weatherDisplay/weatherDisplay";

import { fetchData } from "../utils/index";

import "../main.css";

class WeatherApp extends Component {
  state = {
    text: "",
    interval:null
  };

  onChangeInput = e => {
    this.setState({ text: e.target.value });
  };

  componentDidUpdate(prevProps) {
    const { activeCity } = this.props;

    if (prevProps.activeCity !== activeCity) {
      clearInterval(this.state.interval);

      if (activeCity) {
        this.getWeather(activeCity.name);

        const interval = setInterval(() => {
          this.getWeather(activeCity.name);
        }, 10000);

        this.setState({interval})
      };
    };
  };

  getWeather(cityName) {
    fetchData(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${AAPID}`)
      .then(res => this.props.setWeather(res))
      .catch(res => {
        clearInterval(this.state.interval);
        this.props.setWeather(null);
        res.then(res => alert(res.message));
      });
  };

  onAddCity = () => {
    const { addCity, cities } = this.props;
    const { text } = this.state;

    const trimmedText = text.trim();
    const isCityAlreadyAdded = cities.find(city => city.name.toUpperCase() === trimmedText.toUpperCase());
    const isFieldEmpty = text === "";

    if (isCityAlreadyAdded) {
      alert("City already added to list");
      return;
    };

    if (isFieldEmpty) {
      alert("Field cannot be empty");
      return;
    }

    addCity(text);
    this.setState({ text: "" });
  };

  onChangeRadio = city => () => {
    this.props.setActiveCity(city);
  };

  onDeleteCity = city => () => {
    const { activeCity, deleteCity, setWeather } = this.props;

    const isActiveCityBeingDeleted = activeCity && (city.id === activeCity.id);

    if (isActiveCityBeingDeleted) {
      clearInterval(this.state.interval)
      setWeather(null);
    };

    deleteCity(city.id)
  };

  componentWillUnmount() {
    clearInterval(this.state.interval);
  };

  render() {
    const { cities, weather } = this.props;
    const { text } = this.state;

    return (
      <div className={"weather-container"}>
        <div className={"weather"}>
          <h2 className={"weather__headline"}>Weather APP</h2>
          <Input value={text} onChange={this.onChangeInput} />
          <Button onClick={this.onAddCity}>ADD</Button>
          <List
            cities={cities}
            onChangeRadio={this.onChangeRadio}
            onDeleteCity={this.onDeleteCity}
          />
        </div>
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  cities: state.cities.cities,
  activeCity: state.cities.activeCity,
  weather: state.weather.weather
});

const mapDispatchToProps = dispatch => ({
  addCity: (name) => dispatch(addCity(name)),
  deleteCity: (id) => dispatch(removeCity(id)),
  setActiveCity: (id) => dispatch(setActiveCity(id)),
  setWeather: (weather) => dispatch(setWeather(weather))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);