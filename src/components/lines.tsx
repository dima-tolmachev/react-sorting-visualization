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
  render() {
    const { cnt, color } = this.props;
    var elements: number[] = generateRandomArray(cnt);

    return (
      <div style={{ display: "flex", gap: "1%", height:"75vh", marginTop:"1em"}}>
        {elements.map((val: number) => (
          <Line value={val} position={"1"} color={color} />
        ))}
      </div>
    );
  }
}

export default Lines;
