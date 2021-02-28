const ADD_CITY = "ADD_CITY";
const REMOVE_CITY = "REMOVE_CITY";
const SET_ACTIVE_CITY = "SET_ACTIVE_CITY";

export const addCity = (cityName) => ({
  type: ADD_CITY,
  cityName
});

export const removeCity = (id) => ({
  type: REMOVE_CITY,
  id
});

export const setActiveCity = (activeCity) => ({
  type: SET_ACTIVE_CITY,
  activeCity
});
