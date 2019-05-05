import ActionTypes from './actionTypes'
// 默认值
const defaultData = {
  target: '',
  list: []
}
// reducer 不可以修改 state 值
// 纯函数， 给固定的输入，有固定的输出，没有任何副作用
export default (state = defaultData, actions) => {
  console.log('reducer', state, actions)
  if (actions.type === ActionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.target = actions.value
    return newState
  } 
  if (actions.type === ActionTypes.SUBMIT_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({value:newState.target})
    newState.target = ''
    return newState
  }
  if (actions.type === ActionTypes.DELETE_INDEX_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(actions.value,1)
    // newState.target = ''
    return newState
  }
  return state
}