import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 1vw;
  padding-top: 1vw;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const Row = styled.nav`
  font-size: 11px;
  color: #343434;
  line-height: 1vw;
`;

const Root = () => {
  return (
    <Footer>
      <Row>About * Other</Row>
      <Row>By RoYu</Row>
    </Footer>
  );
};

export default Root;
