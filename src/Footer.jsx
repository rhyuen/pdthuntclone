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
const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.primaryColour};
`;

const Root = () => {
  return (
    <Footer>
      <Row>
        By{" "}
        <Anchor href="https://ryuen.now.sh" target="_blank">
          RoYu
        </Anchor>
      </Row>
    </Footer>
  );
};

export default Root;
