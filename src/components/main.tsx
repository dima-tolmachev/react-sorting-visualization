import React, { ChangeEvent, Component } from "react";
import Lines from "./lines";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import ArrayRange from "./submenu/arrayRange";
import ArrayColor from "./submenu/arrayColor";
import { ColorResult } from "react-color";

class Main extends Component {
  state = {
    currentRangeValue: 20,
    color: "#3f51b5",
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleColorChange = (color: ColorResult) => {
    this.setState({ color: color.hex });
  };

  handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentRangeValue: parseInt(e.currentTarget.value) });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div style={{ width: "100%", display: "flex", marginTop: "15px" }}>
            <div style={{ marginLeft: "1px" }}>
              <Button color="primary" onClick={this.toggle}>
                Settings
              </Button>
            </div>
            <div style={{ flex: "10" }}></div>
            <div style={{ marginRight: "15px", display: "flex" }}>              
              
            </div>
          </div>
          <Offcanvas isOpen={this.state.isOpen}>
            <OffcanvasHeader toggle={this.toggle}>Settings</OffcanvasHeader>
            <OffcanvasBody>
              <ArrayRange
                crv={this.state.currentRangeValue}
                hrc={this.handleRangeChange}
              />
              <br />
              <ArrayColor cc={this.state.color} hcc={this.handleColorChange} />
            </OffcanvasBody>
          </Offcanvas>
        </div>
        <div>
          <Lines cnt={this.state.currentRangeValue} color={this.state.color} />
        </div>
      </div>
    );
  }
}

export default Main;
