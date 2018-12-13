import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Step from './Step'

function stepsProp (props, propName) {
  if (!Array.isArray(props[propName])) {
    return new Error(`${propName} should be an array`)
  }
  if (props[propName].length < 2 || props[propName].length > 5) {
    return new Error(`Minimum number of ${propName} two and a maximum five`)
  }
}

const Progress = ({ progress, steps, onProgressChange }) => {
  const currentStepIndex = Math.floor((steps.length - 1) * progress / 100)
  const progressOnStep = 100 / (steps.length - 1)

  return (
    <ProgressBar progress={progress}>
      {steps.map((step, index) =>
        <Step
          title={step}
          isActive={index <= currentStepIndex}
          onClick={() => onProgressChange(progressOnStep * index)}
          disabled={index + 1 < currentStepIndex || index - 1 > currentStepIndex}
          key={index}
        />
      )}
    </ProgressBar>
  )
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  onProgressChange: PropTypes.func.isRequired,
  steps: stepsProp
}

export default Progress

const progressKeyframe = keyframes`
  0% {
    width: 0;
  }
`

const ProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10px;
  background-color: #dbdbdb;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => props.progress}%;
    background-color: #5110df;
    animation: ${progressKeyframe} 400ms ease-out;
    transition: width 400ms ease-out;
  }
`
