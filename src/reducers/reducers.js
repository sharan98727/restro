const initstate = {
  recipedata: [],
};

const restaurantreducer = (state = initstate, action) => {
  switch (action.type) {
    case 'RECIPE_DATA':
      return {
        ...state,
        recipedata: [...state.recipedata, action.payload],
      };

    default:
      return state;
  }
};

export default restaurantreducer;
