import React, { Component } from "react";
import { Label, Input } from "reactstrap";

type Props = {
  cm: string;
  hmc: Function;
};

class SortMethod extends Component<Props> {
  render() {
    const { cm, hmc } = this.props;

    return (
      <div>
        <Label style={{ fontWeight: "bold" }}>Choose sorting method</Label>
        <Input onChange={hmc.bind(this)} defaultValue={cm} name="select" type="select">
          <option>Selection</option>
          <option>Bubble</option>
          <option>Quick</option>
          <option>Merge</option>
        </Input>
      </div>
    );
  }
}

export default SortMethod;
