import React, { Component } from "react";
import { Label } from "reactstrap";

type Props = {
  crv: number;
  hrc: Function;
}


class ArrayRange extends Component<Props> {

  render() {
    const { crv,  hrc} = this.props;
    
    return (
      <div>
        <div>
          <Label style={{ fontWeight: "bold" }} for="range">
            There are {crv} elements to sort
          </Label>
          <p>
            Sorting speed is equal to the squared amount of elements divided by second.
          </p>
          <input
            onChange={hrc.bind(this)}
            type={"range"}
            min={5}
            defaultValue={crv}
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