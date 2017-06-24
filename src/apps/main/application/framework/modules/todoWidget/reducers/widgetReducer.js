import _ from 'lodash';
import { Record, Set } from 'immutable';

import actionsTypes from '../actionTypes/widgetActionTypes';

const StateRecord = Record({
  title: '',
  todos: new Set()
});

const defaultState = new StateRecord();

let reducer = (state = defaultState, action) => {
  let result = _.result({
    [actionsTypes.CHANGE_TITLE]: () => {
      return state.set('title', action.payload);
    },
    [actionsTypes.ADD_TODO]: () => {
      return state
      .set('title', '')
      .set('todos', state.todos.add(action.payload));
    }
  }, action.type, () => state);

  return result;
};

export default reducer;
