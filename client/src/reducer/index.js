const initialState = {
  allCharacters: [],
favorites: [],
  location:[],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTER":
      return {
        ...state,
        allCharacters: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
   

    case "ADD_FAVORITE":
      return {
        ...state,
         favorites: [...state.favorites, action.payload]

      };
      case "GET_FAVORITE":
        return{
          ...state,
        }
  
  case "FILTER_LOCATION":

  return {
    ...state,
    allCharacters: action.payload,
  };



    default:
      return state;

  }
};


export default rootReducer;
