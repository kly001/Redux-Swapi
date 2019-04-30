import /* we need our action types here*/
{ FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {
      ...state,
      fetching: true,
      error: null
    };
  case SUCCESS:
    return {
      ...state,
      pokemon: action.payload,
      fetching: false,
      error: null
    };
  case FAILURE:
    return {
      ...state,
      error: action.payload
    };
    default:
      return state;
  }
};
