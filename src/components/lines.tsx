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
  cm: string;
  gna: boolean;
};

class Lines extends Component<Props> {
  state = {
    consequence: generateRandomArray(this.props.cnt),
  };

  bubbleSorting = async () => {
    var arr: number[] = this.state.consequence;

    for (let i: number = 0; i < arr.length; i++) {
      for (let j: number = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let bubble: number = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = bubble;
        }

        await sleep(Math.sqrt(arr.length ** 3));
        this.setState({ consequence: arr });
      }
    }
  };

  selectionSorting = async () => {
    var arr: number[] = this.state.consequence;

    for (let i: number = 0; i < arr.length; i++) {
      let min: number = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp: number = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      
      await sleep(Math.sqrt(arr.length ** 3));
      this.setState({ consequence: arr });
    }
  };

  quickSorting = async () => {
    this.setState({ 
      consequence: await quickSort(
        this.state.consequence,
        this,
        this.state.consequence.length
      )});

    async function quickSort(arr: number[], that: any, len: number): Promise<number[]> {
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

        var inProgress: number[] = left.concat(pivot, right);
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
          await quickSort(left, that, len),
          pivot,
          await quickSort(right, that, len)
        );
      }
    }
  };

  mergeSorting = async () => {
    var res = await mergeSort(this.state.consequence, this, this.state.consequence.length);
    this.setState({ consequence: res });

    async function mergeSort(arr: number[], that: any, len: number): Promise<number[]> {
      if (arr.length <= 1) return arr;

      var mid: number = Math.floor(arr.length / 2);
      var left: number[] = arr.slice(0, mid);
      var right: number[] = arr.slice(mid);

      return await merge(await mergeSort(left, that, len), await mergeSort(right, that, len), that, len);
    }

    async function merge(left: number[], right: number[], that: any, len: number): Promise<number[]> {
      var sortedArr: number[] = [];
      var leftInd: number = 0;
      var rightInd: number = 0;

      while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
          sortedArr.push(left[leftInd]);
          leftInd++;
        } else {
          sortedArr.push(right[rightInd]);
          rightInd++;
        }

        var inProgress: number[] = sortedArr.concat();
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
    const { cnt, color, cm, gna } = this.props;
    const { consequence } = this.state;

    if (consequence.length !== this.props.cnt || gna) {
      this.setState({ consequence: generateRandomArray(cnt) });
    }

    if (cm === 'Selection') {
      return (
        <div>
          <div style={{ position: "absolute", right: "1px", top: "15px" }}>
            <Button
              style={{ marginRight: "5px" }}
              color="primary"
              onClick={this.selectionSorting}
            >
               Start selection sorting
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
    } else if (cm === 'Quick') {
      return (
        <div>
          <div style={{ position: "absolute", right: "1px", top: "15px" }}>
            <Button
              style={{ marginRight: "5px" }}
              color="primary"
              onClick={this.quickSorting}
            >
              Start quick sorting
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
    } else if (cm === 'Merge') {
      return (
        <div>
          <div style={{ position: "absolute", right: "1px", top: "15px" }}>
            <Button
              style={{ marginRight: "5px" }}
              color="primary"
              onClick={this.mergeSorting}
            >
               Start merge sorting
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
    } else {
      return (
        <div>
          <div style={{ position: "absolute", right: "1px", top: "15px" }}>
            <Button
              style={{ marginRight: "5px" }}
              color="primary"
              onClick={this.bubbleSorting}
            >
               Start bubble sorting
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
}

export default Lines;
