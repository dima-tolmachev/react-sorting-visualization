import React, { Component } from "react";

type Props = {
    value: number,
    color: string,
    position: string
};

class Line extends Component<Props> {

  render() {
    const { value, color, position } = this.props;

    return (
        <div id={position} style={{ flex:"1", height: `${value}%`, backgroundColor: color }}></div>
    );
  }
}

export default Line;
