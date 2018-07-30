const INITIAL_STATE = { data: null, playing: false }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_TRACK':
      return { ...state, data: action.payload }
    case 'PLAY_CURRENT_TRACK':
      return { ...state, playing: true }
    case 'PAUSE_CURRENT_TRACK':
      return { ...state, playing: false }
    default:
      return state
  }
}
