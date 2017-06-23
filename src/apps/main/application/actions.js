import actionsTypes from './actionsTypes';

export function changeTodoText(payload) {
  return { type: actionsTypes.CHANGE_TODO_TEXT, payload };
}

export function addTodo(payload) {
  return { type: actionsTypes.ADD_TODO, payload };
}
