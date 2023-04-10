import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
       height: 30px;
       background-color:black;
       color:white;
       display: flex;
       justify-content:center;
       align-items:center;
`
const Annoucement = () => {
  return (
   <Container>Amazing Deal!! Get 50% off on order above of Rs. 1899/-</Container>
  )
}

export default Annoucement
