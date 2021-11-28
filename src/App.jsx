import "./App.css";
import { Component } from "react";
import GetPostById from "./GetPostById";

class App extends Component {
  defaultNumber = 1
  state = { id: this.defaultNumber };

  render() {
    return (
      <div className="App">
        <input
          defaultValue = {this.defaultNumber}
          type="number"
          onChange={(evt) => this.setState({ id: evt.target.value })}
        />
        <GetPostById id={this.state.id} />
      </div>
    );
  }
}

export default App;
