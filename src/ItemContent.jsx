import React from "react";
import styled from "styled-components";

const Avatar = styled.section`
  background: ${props => props.theme.primaryColour};
  height: 2vw;
  box-sizing: border-box;
  width: 2vw;
  margin-right: 1vw;
`;
const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
`;

const Root = ({ header, children }) => {
  if (children) {
    return (
      <Container>
        <Avatar />
        {header}
      </Container>
    );
  } else {
    return (
      <Container>
        <Avatar />
        {header}
        {children}
      </Container>
    );
  }
};

export default Root;
