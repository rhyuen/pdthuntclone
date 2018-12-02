import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.section``;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    lavender,
    ${props => props.theme.primaryColour}
  );
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const InnerRing = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${props => props.theme.backgroundColour};
`;

const LoadingPage = () => {
  return (
    <Container>
      <h2>Page is loading...</h2>
      <section>
        <Rotate>
          <InnerRing />
        </Rotate>
      </section>
    </Container>
  );
};

export default LoadingPage;
