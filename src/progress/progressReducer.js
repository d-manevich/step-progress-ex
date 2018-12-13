import { createAction, handleActions } from 'redux-actions'

export const CHANGE_PROGRESS = 'progress/CHANGE_PROGRESS'

const initalState = {
  progress: 34,
  steps: ['Design', 'Develop', 'Build', 'Launch']
}

export const changeProgress = createAction(CHANGE_PROGRESS)

export default handleActions({
  [CHANGE_PROGRESS]: (state, { payload }) => ({
    ...state,
    progress: payload
  })
}, initalState)
