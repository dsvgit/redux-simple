import actionsTypes from './actionsTypes';

let defaultState = {
  todoText: '',
  todos: []
};

function reducer(state = defaultState, action) {
  let handlers = {
    [actionsTypes.CHANGE_TODO_TEXT]: () => {
      return { ...state, todoText: action.payload };
    },
    [actionsTypes.ADD_TODO]: () => {
      return { ...state, todoText: '', todos: [ ...state.todos, action.payload ] };
    }
  }

  return handlers[action.type] ? handlers[action.type]() : state;
}

export default reducer;
