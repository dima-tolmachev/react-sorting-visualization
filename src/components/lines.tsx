import React, { Component } from "react";
import Line from "./line";
import { Button } from "reactstrap";

function generateRandomArray(n: number): number[] {
  var ans: number[] = [];

  for (let i: number = 0; i < n; i++) {
    ans.push(Math.floor(Math.random() * 95) + 5);
  }

  return ans;
}

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

type Props = {
  cnt: number;
  color: string;
};

class Lines extends Component<Props> {
  state = {
    consequence: generateRandomArray(this.props.cnt),
  };

  bubbleSorting = async () => {
    var arr: number[] = this.state.consequence;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let bubble = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = bubble;
        }

        await sleep(Math.sqrt(arr.length ** 3));
        this.setState({ consequence: arr });
      }
    }
  };

  selectionSorting = async () => {
    var arr = this.state.consequence;

    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      await sleep(Math.sqrt(arr.length ** 3));
      this.setState({ consequence: arr });
    }
    return arr;
  };

  quickSorting = async () => {
    var res = await quick_Sort(
      this.state.consequence,
      this,
      this.state.consequence.length
    );

    this.setState({ consequence: res });

    async function quick_Sort(
      arr: number[],
      that: any,
      len: number
    ): Promise<number[]> {
      if (arr.length <= 1) {
        return arr;
      } else {
        var left: number[] = [];
        var right: number[] = [];
        var sortedArr: number[] = [];
        var pivot: any = arr.pop();

        for (var i = 0; i < arr.length; i++) {
          if (arr[i] <= pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        var inProgress = left.concat(pivot, right);
        if (inProgress.length !== len) {
          await sleep(Math.sqrt(len ** 3));
          for (let i = 0; inProgress.length < len; i++) {
            inProgress.unshift(1);
            if (inProgress.length !== len) {
              inProgress.push(1);
            }
          }
          that.setState({ consequence: inProgress });
        }

        return sortedArr.concat(
          await quick_Sort(left, that, len),
          pivot,
          await quick_Sort(right, that, len)
        );
      }
    }
  };

  mergeSorting = async () => {
    var res = await mergeSort(this.state.consequence, this, this.state.consequence.length);
    this.setState({ consequence: res });

    async function mergeSort(arr: number[], that: any, len: number): Promise<number[]> {
      if (arr.length <= 1) return arr;

      var mid = Math.floor(arr.length / 2);
      var left = arr.slice(0, mid);
      var right = arr.slice(mid);

      return await merge(await mergeSort(left, that, len), await mergeSort(right, that, len), that, len);
    }

    async function merge(left: number[], right: number[], that: any, len: number): Promise<number[]> {
      var sortedArr = [];
      var leftInd = 0;
      var rightInd = 0;

      while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
          sortedArr.push(left[leftInd]);
          leftInd++;
        } else {
          sortedArr.push(right[rightInd]);
          rightInd++;
        }

        var inProgress = sortedArr.concat();
        if (inProgress.length !== len) {
          await sleep(Math.sqrt(len ** 3));
          for (let i = 0; inProgress.length < len; i++) {
            inProgress.unshift(1);
            if (inProgress.length !== len) {
              inProgress.push(1);
            }
          }
          that.setState({ consequence: inProgress });
        }
      }

      return sortedArr.concat(left.slice(leftInd)).concat(right.slice(rightInd));
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
            onClick={this.selectionSorting}
          >
            Selection
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.quickSorting}
          >
            Quick
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            color="success"
            onClick={this.mergeSorting}
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
