import _ from 'lodash';

import actionsTypes from '../actionTypes/widgetActionTypes';

let defaultState = {
  title: '',
  todos: []
};

let reducer = (state = defaultState, action) => {
  return _.result({
    [actionsTypes.CHANGE_TITLE]: () => {
      return { ...state, title: action.payload };
    },
    [actionsTypes.ADD_TODO]: () => {
      return { ...state, title: '', todos: [ ...state.todos, action.payload ] };
    }
  }, action.type, state);
};

export default reducer;
