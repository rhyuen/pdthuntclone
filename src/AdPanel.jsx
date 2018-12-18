import React, { Component } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import styled from "styled-components";
import validator from "validator";
import SideList from "./SideList.jsx";
import Footer from "./Footer.jsx";
import ItemContent from "./ItemContent.jsx";
import ListItem from "./ProductListItem.jsx";
import { hot } from "react-hot-loader";
import getEnv from "./getenv.js";

const devApiUrlRoot = getEnv();

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

const AdImage = styled.img`
  width: 100%;
  height: 8vw;
  background: ${props => props.theme.primaryColour};
  object-fit: cover;
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
    border-bottom: 3px solid ${props => props.theme.primaryColour};
  }
`;
const AdButton = styled.button`
  text-transform: uppercase;
  background: ${props => props.theme.primaryColour};
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  border: 0;
  width: 100%;
  font-size: 12px;
  height: 1.5vw;

  &:focus {
    outline: none;
  }

  &:hover {
    background: white;
    color: ${props => props.theme.primaryColour};
    border: 2px solid ${props => props.theme.primaryColour};
  }
`;

class AdPanel extends Component {
  state = {
    adlist: [],
    adCollapsed: false,
    emailCollapsed: false,
    emailValidationWarning: false,
    emailSubForm: ""
  };

  handleCloseButton = e => {
    const name = e.target.name;
    if (name === "download_close_button") {
      this.setState({
        adCollapsed: true
      });
    } else if (name === "email_close_button") {
      this.setState({
        emailCollapsed: true
      });
    } else {
      return;
    }
  };

  componentDidMount() {
    const url = "https://ryfaas.netlify.com/.netlify/functions/nine";
    axios
      .get(url)
      .then(res => {
        this.setState({ adlist: res.data.addresses });
      })
      .catch(e => {
        console.log(`${e}`);
      });
  }

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
    } else {
      axios
        .post(`${devApiUrlRoot}/email`, { email: this.state.emailSubForm })
        .then(res => {
          console.log(res);
          this.setState(prevState => {
            return {
              ...prevState,
              emailCollapsed: true,
              emailSubForm: ""
            };
          });
        })
        .catch(e => {
          console.log(e);
          this.setState(prevState => {
            return {
              ...prevState,
              emailCollapsed: true,
              emailSubForm: ""
            };
          });
        });
    }
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
          header="Header stuff resides here."
          subheader="Subheader as well as extra text."
        >
          <ListItem>
            <ItemContent header="First Headline Text" />
          </ListItem>
          <ListItem>
            <ItemContent header="The Second Headline Words" />
          </ListItem>
          <ListItem>
            <ItemContent header="Third Words Filler" />
          </ListItem>
          <ListItem>
            <ItemContent header="Fourth Headline Filler" />
          </ListItem>
        </SideList>

        {this.state.adCollapsed ? null : (
          <section>
            <Card>
              <AdImage src={this.state.adlist[0]} />
              <AdHeader>An overwhelmingly biased article.</AdHeader>
              <AdButton onClick={this.handleAdClick}>
                <StyledLink
                  href="https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf"
                  target="_blank"
                >
                  Download
                </StyledLink>
              </AdButton>
              <CloseButton
                onClick={this.handleCloseButton}
                name="download_close_button"
              >
                X
              </CloseButton>
            </Card>
          </section>
        )}

        <SideList
          header="Primary Headline for Second Set"
          subheader="Subheader and extraneous stuff to get me to the next line."
        >
          <ListItem>
            <ItemContent header="Second Set, First Header">
              Subtext goes here because subtext is necessary.
            </ItemContent>
          </ListItem>
          <ListItem>
            <ItemContent header="Second Set, Second Header">
              Subtext goes here because subtext is necessary.
            </ItemContent>
          </ListItem>
          <ListItem>
            <ItemContent header="Second Set, Third Header">
              Shorter subtext.
            </ItemContent>
          </ListItem>
          <ListItem>
            <ItemContent header="Second Set, Fourth Header">
              Subtext goes here because subtext is necessary.
            </ItemContent>
          </ListItem>
        </SideList>

        {this.state.emailCollapsed ? null : (
          <section>
            <Card>
              <AdImage src={this.state.adlist[1]} />
              <AdHeader>For followup messages.</AdHeader>
              <AdInput
                placeholder="Your goes email here."
                onChange={this.handleEmailInputChange}
                value={this.state.emailSubForm}
              />
              <AdButton onClick={this.handleEmailClick}>Subscribe</AdButton>
              <CloseButton
                onClick={this.handleCloseButton}
                name="email_close_button"
              >
                X
              </CloseButton>
            </Card>
          </section>
        )}
        <Footer />
      </Root>
    );
  }
}

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -0.5vw;
  right: -0.5vw;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.primaryColour};
  background: ${props => props.theme.primaryColour};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1vw;
  height: 1vw;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: gray;
  }
`;

// const hotFunction = hot(module);
// export default hotFunction(AdPanel);
export default hot(module)(AdPanel);
