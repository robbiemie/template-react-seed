import ActionTypes from './actionTypes'
export default {
  getInputChangeAction (value) {
    return {
      type: ActionTypes.CHANGE_INPUT_VALUE,
      value
    }
  },
  getSubmitInputAction (value) {
    return {
      type: ActionTypes.SUBMIT_INPUT_VALUE
    }
  },
  getDeleteItemAction(index) {
    return {
      type: ActionTypes.DELETE_INDEX_VALUE,
      value: index
    }
  }
}