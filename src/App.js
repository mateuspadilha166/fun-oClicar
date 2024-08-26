import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleDocumentClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }));
  };

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentDidUpdate() {
    console.log(`Atualizou: ${this.state.clicks} cliques`);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
  }

  render() {
    return (
      <div>
        <h1>Quantidade de cliques: {this.state.clicks}</h1>
      </div>
    );
  }
}

export default App;