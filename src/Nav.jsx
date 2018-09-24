import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  width: 100vw;
`;
const StyledLink = styled(Link)``;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/subscribed">Subscribed</StyledLink>
      <StyledLink to="/me">Me</StyledLink>
    </StyledNav>
  );
};

export default Nav;
