import React from "react";
import { Search,  ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive.js";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import { Input } from '@material-ui/core';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center
justify-content: space-between;
 ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  displays: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "10px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: geometric;
  ${mobile({ fontSize: "24px" })}; 
`;

const MenuItem=styled.div`
font-size: 15px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })} `

const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
 
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search  style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>WE_TREND</Logo>
        </Center>
        <Right>
          {/* <MenuItem className="nav-link active" to="/pages/Register">Register</MenuItem> */}
          {/* <Link to="/register"> </Link> */}
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem> 
              <Badge badgeContent={10} color="primary">
               <ShoppingCartOutlined/>
                </Badge> 
           </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
