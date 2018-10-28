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
  align-items: center;
  width: 100%;
  font-weight: 500;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const SubHeader = styled.section`
  font-size: 0.7rem;
  font-weight: 400;
`;

const Root = ({ header, children }) => {
  if (!children) {
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
        <TextContainer>
          {header}
          <SubHeader>{children}</SubHeader>
        </TextContainer>
      </Container>
    );
  }
};

export default Root;
