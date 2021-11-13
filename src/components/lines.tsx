import React, { Component } from "react";
import Line from "./line";

function generateRandomArray(n: number): number[] {
  var ans: number[] = [];

  for (let i: number = 0; i < n; i++) {
    ans.push(Math.floor(Math.random() * 95) + 5);
  }

  return ans;
}

type Props = {
  cnt: number;
  color: string ;
}

class Lines extends Component<Props> {
  state = {
    consequence: generateRandomArray(this.props.cnt)
  }

  render() {
    const { cnt, color } = this.props;
    const { consequence } = this.state;
    
    if (consequence.length !== this.props.cnt) {
      this.setState({ consequence: generateRandomArray(cnt) })
    };

    return (
      <div style={{ display: "flex", gap: "1%", height:"75vh", marginTop:"1em"}}>
        {consequence.map((val: number) => (
          <Line value={val} position={"1"} color={color} />
        ))}
      </div>
    );
  }
}

export default Lines;
