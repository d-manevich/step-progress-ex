import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Step = ({ title, isActive, disabled, onClick }) => (
  <StepBtn
    isActive={isActive}
    onClick={disabled ? null : onClick}
    disabled={disabled}
  >
    <StepTitle>{ title }</StepTitle>
  </StepBtn>
)

Step.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Step.defaultProps = {
  title: '',
  isActive: false,
  disabled: false,
  onClick: () => {}
}

export default Step

const pulseKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.2);
  }
  33% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`

const StepBtn = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  height: 10px;
  width: 10px;
  background-color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};
  color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};
  transition: background-color 400ms ease-out;

  &[disabled] {
    cursor: not-allowed;
  }

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

  &:not([disabled]):hover {
    &:before,
    &:after {
      animation: ${pulseKeyframe} 700ms ease-out infinite;
    }
  }
`

const StepTitle = styled.div`
  position: absolute;
  left: 50%;
  top: -70px;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 22px;
  transition: color 400ms ease-out;
`
