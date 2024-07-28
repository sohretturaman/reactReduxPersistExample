
const INITIAL_STATE = {noteList: []};
const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LİST':
      return {...state, noteList: [...state.noteList, action.payload]};
    case 'DELETE_LIST':
        return {
          ...state,
          noteList:[...state.noteList.filter((_, index) => index !== action.payload)],
        };
    default:
      return state;
  }
};
export default listReducer;
