import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import PdtList from "./PdtList.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoadingPage from "./LoadingPage.jsx";
import Form from "./PdtForm.jsx";
import PdtFilter from "./PdtFilter.jsx";
import AdPanel from "./AdPanel.jsx";

const devApiUrlRoot = "http://localhost:9873";

class App extends Component {
  state = {
    data: [],
    user: {
      name: "Darkseid"
    },
    filter: "All",
    pdtName: `Product Name ${Math.floor(Math.random() * 100)}`,
    pdtDescription: `Summary Description ${Math.floor(Math.random() * 100)}`,
    pdtCategory: `Category ${Math.floor(Math.random() * 100)}`,
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    const apiURL = `${devApiUrlRoot}/product`;
    axios
      .get(apiURL)
      .then(res => {
        const responseData = res.data.data;
        this.setState(prevState => {
          return {
            ...prevState,
            data: responseData,
            isLoading: false
          };
        });
      })
      .catch(e => {
        //TODO: POST a request to a server with the error.
        this.setState(prevState => {
          return {
            ...prevState,
            isError: true,
            isLoading: false
          };
        });
      });
  }

  handleInputChange = e => {
    let currValue = e.currentTarget.value;
    let currInput = e.currentTarget.name;

    this.setState(prevState => {
      let change = {};
      switch (currInput) {
        case "pdtName":
          change = { pdtName: currValue };
          break;
        case "pdtDescription":
          change = { pdtDescription: currValue };
          break;
        case "pdtCategory":
          change = { pdtCategory: currValue };
          break;
      }
      return Object.assign(prevState, change);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.pdtName;
    const category = this.state.pdtCategory;
    const summaryDescription = this.state.pdtDescription;

    if (name === "" || category === "" || summaryDescription === "") {
      return this.setState(prevState => {
        return prevState;
      });
    }
    const payload = { name, category, summaryDescription };
    axios
      .post(`${devApiUrlRoot}/product`, payload)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          const updated = prevState.data.concat(res.data);
          return {
            ...prevState,
            data: updated,
            pdtName: "",
            pdtCategory: "",
            pdtDescription: ""
          };
        });
      })
      .catch(e => {
        //TODO: Error message handling
        console.log("post error");
        console.log(e);
        this.setState(prevState => {
          return {
            ...prevState,
            isError: true
          };
        });
      });
  };

  handleUpvote = (id, e) => {
    const upvotePending = this.state.data.filter(item => item._id === id);
    if (upvotePending.upped) {
      return;
    }
    const payload = { action: "UPVOTE", username: this.state.user.name };
    axios
      .put(`${devApiUrlRoot}/product/${id}`, payload)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          let updated = prevState.data.map(curr => {
            //FIND CHANGE ENTITY AND RETURN UPDATED STATE
            return id !== curr._id ? curr : res.data;
          });
          return {
            ...prevState,
            data: updated
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  // handleSubscribe = (id, e) => {
  //   this.setState(prevState => {
  //     let updated = prevState.data.map(curr => {
  //       if (id !== curr._id) {
  //         return curr;
  //       } else if (curr.subscribed) {
  //         return curr;
  //       } else {
  //         return Object.assign(curr, {
  //           subscribed: true
  //         });
  //       }
  //     });
  //     return {
  //       ...prevState,
  //       data: updated
  //     };
  //   });
  // };

  handleSubscribe = (id, e) => {
    const payload = { action: "SUBSCRIBE", username: this.state.user.name };
    axios
      .put(`${devApiUrlRoot}/product/${id}`, payload)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          let updated = prevState.data.map(curr => {
            //FIND CHANGE ENTITY AND RETURN UPDATED STATE
            return id !== curr._id ? curr : res.data;
          });
          return {
            ...prevState,
            data: updated
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleCloseButton = (id, e) => {
    this.setState(prevState => {
      let updated = prevState.data.filter(curr => id !== curr._id);
      return {
        ...prevState,
        data: updated
      };
    });
  };

  handleSaveForLater = (id, e) => {
    const payload = { action: "SAVE", username: this.state.user.name };
    axios
      .put(`${devApiUrlRoot}/product/${id}`, payload)
      .then(res => {
        console.log(res.data);
        this.setState(prevState => {
          let updated = prevState.data.map(curr => {
            //FIND CHANGE ENTITY AND RETURN UPDATED STATE
            return id !== curr._id ? curr : res.data;
          });
          return {
            ...prevState,
            data: updated
          };
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleFilterChange = (name, e) => {
    this.setState(prevState => {
      return {
        ...prevState,
        filter: name
      };
    });
  };

  getFilteredData = () => {
    return this.state.filter === "All"
      ? this.state.data
      : this.state.data.filter(datum => datum.category === this.state.filter);
  };

  render() {
    const filteredData = this.getFilteredData();

    if (this.state.isLoading) {
      return <LoadingPage />;
    } else if (this.state.isError) {
      return <ErrorPage />;
    } else {
      return (
        <Root>
          <MainPanel>
            <TempUser>
              Logged in as: <strong>{this.state.user.name}</strong>
            </TempUser>
            <Form
              onSubmit={this.handleSubmit}
              nameValue={this.state.pdtName}
              descriptionValue={this.state.pdtDescription}
              categoryValue={this.state.pdtCategory}
              onInputChange={this.handleInputChange}
            />
            <PdtFilter
              data={this.state.data}
              onFilterChange={this.handleFilterChange}
            />
            <PdtList
              username={this.state.user.name}
              data={filteredData}
              onClickSaveForLater={this.handleSaveForLater}
              onClickUpvote={this.handleUpvote}
              onSubscribe={this.handleSubscribe}
              onClickCloseButton={this.handleCloseButton}
            />
          </MainPanel>
          <AdPanel />
        </Root>
      );
    }
  }
}

const TempUser = styled.section`
  padding: 2vw 1vw;
  background: #f9f9f9;
`;

const Root = styled.div`
  display: flex;
`;

const MainPanel = styled.main`
  box-sizing: border-box;
  width: 70%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export default App;
