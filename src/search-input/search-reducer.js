const INITIAL_STATE = { query: '', tracks: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLER_SEARCH':
      return { ...state, tracks: action.payload }
    case 'CHANGE_QUERY':
      return { ...state, query: action.payload }
    default:
      return state
  }
}
