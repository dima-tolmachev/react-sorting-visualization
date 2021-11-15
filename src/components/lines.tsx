import React, { Component } from "react";
import Line from "./line";
import { Button } from "reactstrap";
import bubbleSorting from "../algorithms/bubbleSorting";

function generateRandomArray(n: number): number[] {
  var ans: number[] = [];

  for (let i: number = 0; i < n; i++) {
    ans.push(Math.floor(Math.random() * 95) + 5);
  }

  return ans;
}

type Props = {
  cnt: number;
  color: string;
};

class Lines extends Component<Props> {
  state = {
    consequence: generateRandomArray(this.props.cnt),
  };

  bubbleSorting = () => {
    for (let i = 0; i < this.state.consequence.length ** 2; i++) {
      var arr = bubbleSorting(this.state.consequence).next();
      this.setState({ consequence: arr.value });
    }
  };

  render() {
    const { cnt, color } = this.props;
    const { consequence } = this.state;

    if (consequence.length !== this.props.cnt) {
      this.setState({ consequence: generateRandomArray(cnt) });
    }

    return (
      <div>
        <div style={{ position: "absolute", right: "1px", top: "15px" }}>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.bubbleSorting}
          >
            Bubble
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.bubbleSorting}
          >
            Quick
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.bubbleSorting}
          >
            Heap
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.bubbleSorting}
          >
            Merge
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1%",
            height: "75vh",
            marginTop: "1em",
          }}
        >
          {consequence.map((val: number, i: number) => (
            <Line key={i} value={val} position={"1"} color={color} />
          ))}
        </div>
      </div>
    );
  }
}

export default Lines;