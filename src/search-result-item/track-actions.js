/* eslint-disable */

export const changeTrack = track => ({
  type: 'CHANGE_TRACK',
  payload: track
})

export const playTrack = () => ({
  type: 'PLAY_CURRENT_TRACK',
})

export const pauseTrack = () => ({
  type: 'PAUSE_CURRENT_TRACK',
})