import React, { Component } from "react";
import { Label } from "reactstrap";

class ArrayRange extends Component {
  state = {
    currentRangeValue: 20,
  };

  handleInputChange = (e: any) => {
    this.setState({ currentRangeValue: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <div>
          <Label style={{ fontWeight: "bold" }} for="range">
            There are {this.state.currentRangeValue} elements to sort
          </Label>
          <p>
            Sorting speed is equal to the squared amount of elements divided by second.
          </p>
          <input
            onChange={this.handleInputChange}
            type={"range"}
            min={5}
            defaultValue={this.state.currentRangeValue}
            max={35}
            step={5}
            style={{ width: "100%" }}
            name="range"
          />
        </div>
      </div>
    );
  }
}

export default ArrayRange;
