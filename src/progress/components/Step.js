import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Step = ({ title, isActive, disabled, onClick }) => (
  <StepBtn
    isActive={isActive}
    onClick={onClick}
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

const StepBtn = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  height: 10px;
  width: 10px;
  background-color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};
  color: ${props => props.isActive ? '#5110df' : '#dbdbdb'};

  &:disabled {
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
`

const StepTitle = styled.div`
  position: absolute;
  left: 50%;
  top: -70px;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 22px;
`
