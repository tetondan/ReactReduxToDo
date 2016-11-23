import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items: (state = [], action) => {
    switch(action.type) {
      case "ADD_TODO": return [...state, {title: action.title, completed: false, id: action.id}]
      case "TOGGLE_TODO": 
        let toggled = state[action.id];
        toggled.completed = !toggled.completed;
        return [...state.slice(0, action.id), toggled,...state.slice(action.id + 1)]
      default: 
        return state;
    }
  },
  selected: (state = "All", action) => {
    switch(action.type){
      case "CHANGE_SELECTED": return action.selected;
      default: return state;  
    }
  }
});

export default rootReducer;