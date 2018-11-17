import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-weight: 500;
`;
const Avatar = styled.figure`
  background: ${props => props.theme.primaryColour};
  margin: 0;
  height: 2vw;
  box-sizing: border-box;
  width: 2vw;
  margin-right: 1vw;
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
    const truncated =
      children.length > 40 ? children.slice(0, 35).concat("...") : children;
    return (
      <Container>
        <Avatar />
        <TextContainer>
          {header}
          <SubHeader>{truncated}</SubHeader>
        </TextContainer>
      </Container>
    );
  }
};

export default Root;
