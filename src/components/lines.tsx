import React, { Component } from "react";
import Line from "./line";

function defaultRandom(): number[] {
  var ans: number[] = [];
  for (let i: number = 0; i < 20; i++) {
    ans.push(Math.floor(Math.random() * 95) + 5);
  }
  return ans;
}

class Lines extends Component {
  elements = defaultRandom();

  render() {
    return (
      <div style={{ display: "flex", gap: "1%", height:"75vh", marginTop:"1em"}}>
        {this.elements.map((val: number) => (
          <Line value={val} position={"1"} color="blue"/>
        ))}
      </div>
    );
  }
}

export default Lines;
