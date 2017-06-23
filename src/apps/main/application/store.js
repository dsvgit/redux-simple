import { createStore } from 'redux';

import reducer from './framework/modules/todoWidget/reducers/widgetReducer.js';

export default createStore(reducer);
