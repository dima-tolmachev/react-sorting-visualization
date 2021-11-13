import React, { Component } from "react";
import { Label } from "reactstrap";
import { CirclePicker } from "react-color";

class ArrayColor extends Component {
  render() {
    return (
      <div>
        <Label style={{ fontWeight: "bold" }}>Choose color for elements</Label>
        <p>This parameter does not affect the logic of any sorting algorithms.</p>
        <CirclePicker />
      </div>
    );
  }
}

export default ArrayColor;
