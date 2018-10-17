import React from "react";
import Card from "./Card.jsx";
import styled from "styled-components";
import SideList from "./SideList.jsx";
import Footer from "./Footer.jsx";

const Root = styled.aside`
  width: 30%;
  background: #f9f9f9;
  box-sizing: border-box;
  padding: 1vw;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
const AdPanel = () => {
  return (
    <Root>
      <SideList
        header="Header stuff is here."
        subheader="Subheader and some other frivoulous stuff."
      />
      <section>
        <Card>
          <AdImage />
          <AdHeader>An overwhelmingly biased advertorial.</AdHeader>
          <AdButton>Download me now.</AdButton>
        </Card>
      </section>
      <SideList
        header="More Header is here and some other stuff."
        subheader="Subheader and some other stuff to get me to the next line."
      />
      <Card>
        <AdImage />
        <AdHeader>For all the messages.</AdHeader>
        <AdInput placeholder="Let me email you; it's the best." />
        <AdButton>Subscribe</AdButton>
      </Card>
      <Footer />
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
