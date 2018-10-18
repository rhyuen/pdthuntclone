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
  height: 2vw;
  width: 2vw;
  animation: ${rotate} 1s linear infinite;
  padding: 1vw 1vw;
  font-size: 1.2rem;
`;

const LoadingPage = () => {
  return (
    <Container>
      <h2>Page is loading...</h2>
      <p>
        Cool kids add animations here.
        <Rotate>|O|^|O|</Rotate>
      </p>
    </Container>
  );
};

export default LoadingPage;
