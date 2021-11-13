import React, { Component } from "react";
import { Label } from "reactstrap";
import { CirclePicker } from "react-color";

type Props = {
  cc: any;
  hcc: Function;
};

class ArrayColor extends Component<Props> {
  render() {
    const { cc, hcc } = this.props;

    return (
      <div>
        <Label style={{ fontWeight: "bold" }}>Choose color for elements</Label>
        <p>
          This parameter does not affect the logic of any sorting algorithms.
        </p>
        <CirclePicker color={cc} onChangeComplete={hcc.bind(this)} />
      </div>
    );
  }
}

export default ArrayColor;
