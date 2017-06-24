import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextInput from 'components/textInput';
import * as widgetActions from '../../actions/widgetActions';

function generateId() {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

let Todo = props => {
  let { todo } = props;

  return (
    <li>{todo}</li>
  );
};

let Todos = props => {
  let {
    children
  } = props;

  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  );
};

let Toolbar = props => {
  let {
    title,
    addTodo,
    changeTitle
  } = props;

  return (
    <TextInput value={title}
               onChange={(e, v) => { changeTitle(v) }}
               onKeyPress={e => { (e.key == 'Enter' ) && addTodo(title) } } />
  );
}

let ToolbarContainer = connect(
  state => {
    let props = {
      title: state.title
    };

    return props;
  },
  dispatch => {
    let actions = _.pick(widgetActions, [
      'changeTitle',
      'addTodo'
    ]);

    return bindActionCreators(actions, dispatch);
  }
)(Toolbar);

let TodoList = props => {
  let {
    todos
  } = props;

  return (
    <Todos>
      {todos.map(todo => {
        return (
          <Todo todo={todo} key={generateId()}/>
        );
      })}
    </Todos>
  );
}

let TodoListContainer = connect(
  state => {
    let props = {
      todos: state.todos
    };

    return props;
  }
)(TodoList);

let TodoWidget = props => {
  return (
    <div>
      <ToolbarContainer />
      <TodoListContainer />
    </div>
  );
}

export default TodoWidget;
