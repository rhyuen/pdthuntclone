import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: white;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 5vh;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.borderColour};
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 1vw;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.primaryColour};
  
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/subscribed">Subscribed</StyledLink>
        <StyledLink to="/me">Me</StyledLink>
      </StyledNavContainer>
    </StyledNav>
  );
};

export default Nav;
