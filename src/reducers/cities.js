import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cities: [
    { name: "Kraków", id: uuidv4() },
    { name: "Dallas", id: uuidv4() },
    { name: "Lublin", id: uuidv4() },
    { name: "Boston", id: uuidv4() },
  ],
  activeCity: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            name: action.cityName,
            id: uuidv4()
          }
        ]
      };
    case 'REMOVE_CITY':
      return {
        ...state,
        cities: state.cities.filter(({ id }) => id !== action.id)
      };
    case 'SET_ACTIVE_CITY':
      return {
        ...state,
        activeCity: action.activeCity
      };
    default:
      return state;
  }
};
