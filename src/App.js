import React, { Component } from 'react'
import styled from 'styled-components'
import Progress from 'components/progress/Progress'

class App extends Component {
  state = {
    progress: 40,
    steps: ['Design', 'Develop', 'Build', 'Launch']
  }

  handleProgressChange = event => {
    this.setState({ progress: parseInt(event.target.value) })
  }

  handleStepClick = stepIndex => {
    const { steps } = this.state
    const progress = 100 / (steps.length - 1) * stepIndex

    this.setState({ progress })
  }

  render () {
    const { progress, steps } = this.state

    return (
      <Wrapper>
        <Container>
          <Progress progress={progress} steps={steps} onStepClick={this.handleStepClick} />
          <Controls>
            <input type='range' min={0} max={100} value={progress} onChange={this.handleProgressChange} />
          </Controls>
        </Container>
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`
