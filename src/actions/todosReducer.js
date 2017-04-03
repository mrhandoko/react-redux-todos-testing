import * as ActionTypes from '../actions/constants'

export const todosReducer = (state = { todos:[] }, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS:
      return state
    default:
      return state
  }
}
