

export default function appReducers(state, action) {
  switch (action.type) {
  case 'SET_STATE':
    return action.state;
  default:
    return state;
  }
}
