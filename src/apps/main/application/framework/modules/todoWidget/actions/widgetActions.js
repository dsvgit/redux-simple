import actionsTypes from '../actionTypes/widgetActionTypes';

export function changeTitle(payload) {
  return { type: actionsTypes.CHANGE_TITLE, payload };
}

export function addTodo(payload) {
  return { type: actionsTypes.ADD_TODO, payload };
}
