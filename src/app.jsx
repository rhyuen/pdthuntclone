import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import PdtList from "./PdtList.jsx";
import Form from "./PdtForm.jsx";
import PdtFilter from "./PdtFilter.jsx";
import AdPanel from "./AdPanel.jsx";

const devApiUrlRoot = "http://localhost:9873";

class App extends Component {
  state = {
    data: [],
    filter: "All",
    pdtName: `Product Name ${Math.floor(Math.random() * 100)}`,
    pdtDescription: `Summary Description ${Math.floor(Math.random() * 100)}`,
    pdtCategory: `Category ${Math.floor(Math.random() * 100)}`,
    adCollapsed: false,
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    const apiURL = `${devApiUrlRoot}/product`;
    axios
      .get(apiURL)
      .then(res => {
        const responseData = res.data.data;
        const dataWithId = responseData.map(item => {
          return Object.assign(item, {
            subscribed: false,
            upped: false,
            saved: false
          });
        });
        this.setState(prevState => {
          return {
            ...prevState,
            data: dataWithId,
            isLoading: false
          };
        });
      })
      .catch(e => {
        //TODO: Make Error Disclaimer/Message show up.
        console.log(e);
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
    // const fullDescription =
    //   "A fuller description has not yet been added, but this will have to do for now.";
    // const id = uuid.v4();
    // let updated = this.state.data.concat({
    //   id,
    //   name,
    //   category,
    //   description,
    //   fullDescription,
    //   subscribed: false,
    //   upped: false,
    //   saved: false,
    //   count: 0
    // });
    if (name === "" || category === "" || summaryDescription === "") {
      return this.setState(prevState => {
        return prevState;
      });
    }
    const payload = { name, category, summaryDescription };
    axios
      .post(`${devApiUrlRoot}/product`, payload)
      .then(res => {
        console.log(res);
        this.setState(prevState => {
          const latest = Object.assign(res.data, {
            subscribed: false,
            upped: false,
            saved: false
          });

          const updated = prevState.data.concat(latest);
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
        //TODO: ERror message handling
        console.log("post error");
        console.log(e);
      });
  };

  handleUpvote = (id, e) => {
    this.setState(prevState => {
      let updated = prevState.data.map(curr => {
        if (id !== curr._id) {
          return curr;
        } else if (curr.upped) {
          return curr;
        } else {
          return Object.assign(curr, {
            count: curr.count + 1,
            upped: true
          });
        }
      });
      return {
        ...prevState,
        data: updated
      };
    });
  };

  handleSubscribe = (id, e) => {
    this.setState(prevState => {
      let updated = prevState.data.map(curr => {
        if (id !== curr._id) {
          return curr;
        } else if (curr.subscribed) {
          return curr;
        } else {
          return Object.assign(curr, {
            subscribed: true
          });
        }
      });
      return {
        ...prevState,
        data: updated
      };
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
    this.setState(prevState => {
      let updated = prevState.data.map(curr => {
        if (id !== curr._id || curr.saved) {
          return curr;
        } else {
          const change = { saved: true };
          return Object.assign(curr, change);
        }
      });
      return {
        ...prevState,
        data: updated
      };
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

    return (
      <div>
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
          data={filteredData}
          onClickSaveForLater={this.handleSaveForLater}
          onClickUpvote={this.handleUpvote}
          onSubscribe={this.handleSubscribe}
          onClickCloseButton={this.handleCloseButton}
        />
        <AdPanel />
      </div>
    );
  }
}

export default App;
