import { combineReducers } from 'redux';

const itemReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO": return [...state, {title: action.title, completed: false, id: action.id}]
    case "TOGGLE_TODO": 
      let toggled = state[action.id];
      toggled.completed = !toggled.completed;
      return [...state.slice(0, action.id), toggled,...state.slice(action.id + 1)]
    default: 
      return state;
  }
}

const selectedReducer = (state = "All", action) => {
  switch(action.type){
    case "CHANGE_SELECTED": return action.selected;
    default: return state;  
  }
}

const rootReducer = combineReducers({
  items: itemReducer,
  selected: selectedReducer
});

export default rootReducer;