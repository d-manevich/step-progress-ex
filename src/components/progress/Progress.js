import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const checkStep = (currentStepIndex, progress, stepLength) =>
  currentStepIndex * 100 / (stepLength - 1) <= progress

const Progress = ({ progress, steps }) => (
  <ProgressBar progress={progress}>
    {steps.map((step, index) =>
      <Step isActive={checkStep(index, progress, steps.length)} key={index}>
        <StepTitle>{ step }</StepTitle>
      </Step>
    )}
  </ProgressBar>
)

Progress.propTypes = {
  progress: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string)
}

Progress.defaultProps = {
  progress: 50,
  steps: ['Design', 'Launch'] // add count check
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

const Step = styled.div`
  position: relative;
  height: 10px;
  width: 10px;
  background-color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};
  color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &:before {
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background-color: inherit;
  }

  &:after {
    top: -5px;
    left: -5px;
    width: 20px;
    height: 20px;
    background-color: white;
  }
`

const StepTitle = styled.div`
  position: absolute;
  left: 50%;
  top: -70px;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 22px;
`
