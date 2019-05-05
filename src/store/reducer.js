const defaultData = {
  target: '',
  list: []
}
// reducer 不可以修改 state 值
export default (state = defaultData, actions) => {
  console.log('reducer', state, actions)
  if (actions.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.target = actions.value
    return newState
  } 
  if (actions.type === 'submit_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({value:newState.target})
    newState.target = ''
    return newState
  }
  if (actions.type === 'delete_index_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(actions.value,1)
    // newState.target = ''
    return newState
  }
  return state
}