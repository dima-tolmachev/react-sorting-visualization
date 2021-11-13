import React, { Component } from "react";
import Lines from "./lines";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import ArrayRange from "./submenu/arrayRange";
import ArrayColor from "./submenu/arrayColor";

class Main extends Component {
  state = {
    currentRangeValue: 20,
    color: "#3f51b5",
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleColorChange = (color: any) => {
    this.setState({ color: color.hex });
  };

  handleRangeChange = (e: any) => {
    this.setState({ currentRangeValue: e.currentTarget.value });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div style={{ width: "100%", marginTop: "10px" }}>
            <div style={{ float: "left", marginLeft: "5px" }}>
              <Button color="primary" onClick={this.toggle}>
                Settings
              </Button>
            </div>

            <div style={{ float: "right", marginRight: "5px" }}>
              <Button color="success" onClick={this.toggle}>
                Bubble
              </Button>
              <Button color="success" onClick={this.toggle}>
                Quick
              </Button>
              <Button color="success" onClick={this.toggle}>
                Heap
              </Button>
              <Button color="success" onClick={this.toggle}>
                Merge
              </Button>
            </div>
          </div>
          <Offcanvas isOpen={this.state.isOpen}>
            <OffcanvasHeader toggle={this.toggle}>Settings</OffcanvasHeader>
            <OffcanvasBody>
              <ArrayRange crv={this.state.currentRangeValue}  hrc={this.handleRangeChange}/>
              <br />
              <ArrayColor cc={this.state.color} hcc={this.handleColorChange}/>
            </OffcanvasBody>
          </Offcanvas>
        </div>
        <div>
          <Lines cnt={this.state.currentRangeValue} color={this.state.color}/>
        </div>
      </div>
    );
  }
}

export default Main;
