import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Step from './Step'

const Progress = ({ progress, steps, onStepClick }) => {
  const currentStepIndex = Math.floor((steps.length - 1) * progress / 100)

  return (
    <ProgressBar progress={progress}>
      {steps.map((step, index) =>
        <Step
          title={step}
          isActive={index <= currentStepIndex}
          onClick={() => onStepClick(index)}
          disabled={index + 1 < currentStepIndex || index - 1 > currentStepIndex}
          key={index}
        />
      )}
    </ProgressBar>
  )
}

Progress.propTypes = {
  progress: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string),
  onStepClick: PropTypes.func
}

Progress.defaultProps = {
  progress: 50,
  steps: ['Design', 'Launch'], // add count check
  onStepClick: () => {}
}

export default Progress

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
  }
`
