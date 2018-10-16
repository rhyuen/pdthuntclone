import React from "react";
import styled from "styled-components";

const Card = styled.section`
  padding: 1vw;
  box-sizing: border-box;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.h1`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  color: #343434;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 1vw;
  padding-bottom: 1vw;
`;

const Root = ({ header, children }) => {
  if (header) {
    return (
      <Card>
        <CardHeader>{header}</CardHeader>
        {children}
      </Card>
    );
  } else {
    return <Card>{children}</Card>;
  }
};

export default Root;
