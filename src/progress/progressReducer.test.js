/* eslint-env jest */
import progressReducer, { CHANGE_PROGRESS, changeProgress } from './progressReducer'

describe('actions', () => {
  it('should create an action to change progress', () => {
    const progress = 99
    const expectedAction = {
      type: CHANGE_PROGRESS,
      payload: progress
    }
    expect(changeProgress(progress)).toEqual(expectedAction)
  })
})

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(progressReducer(undefined, {})).toEqual({
      progress: 34,
      steps: ['Design', 'Develop', 'Build', 'Launch']
    })
  })

  it('should handle CHANGE_PROGRESS', () => {
    expect(
      progressReducer(undefined, {
        type: CHANGE_PROGRESS,
        payload: 67
      })
    ).toEqual({
      progress: 67,
      steps: ['Design', 'Develop', 'Build', 'Launch']
    })

    expect(
      progressReducer(
        {
          progress: 67,
          steps: ['Design', 'Develop']
        },
        {
          type: CHANGE_PROGRESS,
          payload: 15
        }
      )
    ).toEqual({
      progress: 15,
      steps: ['Design', 'Develop']
    })
  })
})
