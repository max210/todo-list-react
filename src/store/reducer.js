const stateDefault = {
  popWindwShow: false,
  popWindwContent: ''
}

// reducer可以接收state,不可直接修改state
export default (state = stateDefault, action) => {
  if (action.type === 'show_pop_window') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.popWindwShow = true
    newState.popWindwContent = action.value
    return newState
  }
  if (action.type === 'hide_pop_window') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.popWindwShow = false
    return newState
  }
  return state
}
