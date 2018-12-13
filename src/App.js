import React, { Component } from 'react'
import styled from 'styled-components'
import Progress from './progress'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Container>
          <Progress />
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
