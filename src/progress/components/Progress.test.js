/* eslint-env jest */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Progress from './Progress'
import Step from './Step'

const steps = ['design', 'launch']

Enzyme.configure({ adapter: new Adapter() })

function setup () {
  const props = {
    progress: 66,
    onProgressChange: jest.fn(),
    steps
  }

  const enzymeWrapper = shallow(<Progress {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Progress', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find(Step).length).toBe(steps.length)
  })

  it('should call onProgressChange on step click', () => {
    const { enzymeWrapper, props } = setup()
    expect(props.onProgressChange.mock.calls).toEqual([])
    enzymeWrapper.find(Step).at(1).simulate('click')
    expect(props.onProgressChange.mock.calls).toEqual([[100]])
  })
})
