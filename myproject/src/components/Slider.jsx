import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
width:100%;
height:100vh;
display: flex;
position: relative;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
top:0;
bottom:0;
left: ${props=> props.direction==="left" && "10px"};
right: ${props=> props.direction==="right" && "10px"};
cursor:pointer;
opacity:0.5;
margin: auto;

`
const Wrapper= styled.div`
   height:100%;

`
 const Slide= styled.div`
           display: flex;
           align-items: center;
           width: 100vw;
           height: 100vh;
 `


 const ImageContainer= styled.div
`flex: 1;
height: 100%`


const  Image= styled.img`
height: 80%`




const InfoContainer= styled.div
`flex: 1;
padding: 50 px`
const Slider = () => {
  return (
    <Container>
             <Arrow direction="left">
                 <ArrowLeftOutlined/>
             </Arrow>
             <Wrapper>
                 <Slide>
                 <ImageContainer>
                    <Image src="E-Commerce-App\myproject\src\Assests\WhatsApp Image 2023-03-04 at 18.44.06.jpeg" alt="no"></Image>
                 </ImageContainer>
                 <InfoContainer/>
                 </Slide>
             </Wrapper>
             <Arrow direction="right">

                 <ArrowRightOutlined/>
             </Arrow>
    </Container>
    )
}

export default Slider
