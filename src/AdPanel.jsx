import React from "react";
import Card from "./Card.jsx";
import styled from "styled-components";

const Root = styled.aside`
  width: 30%;
  background: papayawhip;
  box-sizing: border-box;
  padding: 1vw;
`;
const AdPanel = () => {
  return (
    <Root>
      <div>
        On Item Click Overlay.
        <br />
        On Search Click Overlay.
        <br />
      </div>
      <section>
        <h1>News</h1>
      </section>
      <Card>
        <AdImage />
        <AdHeader>An overwhelmingly biased advertorial.</AdHeader>
        <AdButton>Download me now.</AdButton>
      </Card>
      <section>
        <h1>Jobs Card</h1>
      </section>
      <Card>
        <AdImage />
        <AdHeader>For all the messages.</AdHeader>
        <AdInput placeholder="let me email you, it's the best." />
        <AdButton>Subscribe</AdButton>
      </Card>
      <section>Footer</section>
    </Root>
  );
};

const AdImage = styled.figure`
  width: 100%;
  height: 4vw;
  background: #4842b7;
  margin: 0 auto;
`;
const AdHeader = styled.h1`
  font-weight: 400;
  font-size: 15px;
`;
const AdInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 1vw;
  height: 1.5vw;
  padding: 0.5vw;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 2px solid #4842b7;
  }
`;
const AdButton = styled.button`
  text-transform: uppercase;
  background: #4842b7;
  box-sizing: border-box;
  color: white;
  border: 0;
  width: 100%;
  font-size: 12px;
  height: 1.5vw;

  &:focus {
    outline: none;
  }
`;

export default AdPanel;
