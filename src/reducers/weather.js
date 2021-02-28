const initialState = {
    weather:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
         ...state,
        weather:action.weatherData
      };
    default:
      return state;
  }
};