import React, { Component } from "react";
import styled from "styled-components";
import PdtList from "./PdtList.jsx";
import productFile from "./productdata.json";
import uuid from "uuid";
import Form from "./PdtForm.jsx";
import PdtFilter from "./PdtFilter.jsx";
import AdPanel from "./AdPanel.jsx";

class App extends Component {
  state = {
    data: [],
    filter: "All",
    pdtName: "Newest Product Name",
    pdtDescription: "Newest Description",
    pdtCategory: "Newest Category",
    adCollapsed: false
  };

  componentDidMount() {
    const dataWithId = productFile.data.map(item => {
      return Object.assign(item, {
        id: uuid.v4(),
        subscribed: false,
        upped: false,
        saved: false
      });
    });
    this.setState(prevState => {
      return {
        ...prevState,
        data: dataWithId
      };
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
    const description = this.state.pdtDescription;
    const id = uuid.v4();
    let updated = this.state.data.concat({
      id,
      name,
      category,
      description,
      voted: false,
      count: 0
    });
    if (name === "" || category === "" || description === "") {
      return this.setState(prevState => {
        return prevState;
      });
    }

    this.setState(prevState => {
      return {
        ...prevState,
        data: updated,
        pdtName: "",
        pdtCategory: "",
        pdtDescription: ""
      };
    });
  };

  // handleInputChange = name => e => {
  //     this.setState(prevState => {
  //         return{
  //             ...prevState,
  //             [name]: e.currentTarget.value
  //         };
  //     });
  // }

  handleUpvote = (id, e) => {
    this.setState(prevState => {
      let updated = prevState.data.map(curr => {
        if (id !== curr.id) {
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
        if (id !== curr.id) {
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
      let updated = prevState.data.filter(curr => id !== curr.id);
      return {
        ...prevState,
        data: updated
      };
    });
  };

  handleSaveForLater = (id, e) => {
    this.setState(prevState => {
      let updated = prevState.data.map(curr => {
        if (id !== curr.id || curr.saved) {
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
