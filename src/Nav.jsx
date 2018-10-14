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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 100%;
  background: white;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 1vw;

  &:hover {
    background: #f9f9f9;
    text-decoration: underline;
  }
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
