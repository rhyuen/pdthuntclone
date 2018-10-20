import React, { Component } from "react";
import Card from "./Card.jsx";
import styled from "styled-components";
import validator from "validator";
import SideList from "./SideList.jsx";
import Footer from "./Footer.jsx";

const Root = styled.aside`
  width: 30%;
  background: inherit;
  box-sizing: border-box;
  padding: 1vw;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const AdImage = styled.figure`
  width: 100%;
  height: 4vw;
  background: ${props => props.theme.primaryColour};
  margin: 0 auto;
`;
const AdHeader = styled.h1`
  font-weight: 400;
  font-size: 15px;
`;
const AdInput = styled.input`
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  margin-bottom: 1vw;
  height: 1.5vw;
  padding: 0.5vw;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${props => props.theme.primaryColour};
  }
`;
const AdButton = styled.button`
  text-transform: uppercase;
  background: ${props => props.theme.primaryColour};
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

class AdPanel extends Component {
  state = {
    adCollapsed: false,
    emailCollapsed: false,
    emailValidationWarning: false,
    emailSubForm: ""
  };

  handleEmailInputChange = e => {
    const currentValue = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        emailSubForm: currentValue
      };
    });
  };
  handleEmailClick = e => {
    if (!validator.isEmail(this.state.emailSubForm)) {
      return;
    }
    //TODO: POST REQUEST to email server.
    this.setState(prevState => {
      return {
        ...prevState,
        emailCollapsed: true,
        emailSubForm: ""
      };
    });
  };

  handleAdClick = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        adCollapsed: true
      };
    });
  };
  render() {
    return (
      <Root>
        <SideList
          header="Header stuff is here."
          subheader="Subheader and some other frivoulous stuff."
        />
        {this.state.adCollapsed ? (
          <div />
        ) : (
          <section>
            <Card>
              <AdImage />
              <AdHeader>An overwhelmingly biased advertorial.</AdHeader>
              <AdButton onClick={this.handleAdClick}>Download me now.</AdButton>
            </Card>
          </section>
        )}

        <SideList
          header="More Header is here and some other stuff."
          subheader="Subheader and some other stuff to get me to the next line."
        />
        {this.state.emailCollapsed ? (
          <div />
        ) : (
          <section>
            <Card>
              <AdImage />
              <AdHeader>For all the messages.</AdHeader>
              <AdInput
                placeholder="Let me email you; it's the best."
                onChange={this.handleEmailInputChange}
                value={this.state.emailSubForm}
              />
              <AdButton onClick={this.handleEmailClick}>Subscribe</AdButton>
            </Card>
          </section>
        )}
        <Footer />
      </Root>
    );
  }
}

export default AdPanel;
