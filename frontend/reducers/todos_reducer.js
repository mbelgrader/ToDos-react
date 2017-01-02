import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from './actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      return (merge({}, state));
    case RECEIVE_TODO:
      return state[action.id];
    default:
      return state;
  }
};

export default todosReducer;
