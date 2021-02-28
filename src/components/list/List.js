import React from "react";

import ListItem from "../listItem/ListItem";

import "../../main.css";

export const List = ({ cities = [], onChangeRadio, onDeleteCity }) => (
  <ul className={"weather__city-list"}>
    {cities.map(city => (
      <ListItem city={city} onChangeRadio={onChangeRadio} onDeleteCity={onDeleteCity} key={city.id} />
    ))}
  </ul>
);