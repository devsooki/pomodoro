import React from 'react'
import styled from 'styled-components'
const today = new Date();
const Time = () => {
  return (  
    

    <Container>
      <Content>
        <Clock></Clock>
        <ClockContent>
          {/* <span>AM</span>
          <span>PM</span> */}
        </ClockContent>
      </Content>
    </Container>
  )
}

export default Time

const Container = styled.div`
  position: absolute;
  top: 20px; left: 20px;
  font-weight: bold;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const Clock = styled.div`
  font-size: 50px;

`
const ClockContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`