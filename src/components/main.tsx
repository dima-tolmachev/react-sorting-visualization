import React, { ChangeEvent, Component } from "react";
import Lines from "./lines";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import ArrayRange from "./submenu/arrayRange";
import ArrayColor from "./submenu/arrayColor";
import SortMethod from "./submenu/sortMethod";
import { ColorResult } from "react-color";
import Actions from "./submenu/actions";

class Main extends Component {
  state = {
    currentRangeValue: parseInt(localStorage.getItem("length")!) || 20,
    color: localStorage.getItem("color") || "#3f51b5",
    isOpen: false,
    genNewAsked: false,
    currentMode: localStorage.getItem("mode") || "Selection",
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleColorChange = (color: ColorResult) => {
    localStorage.setItem("color", color.hex);
    this.setState({ color: color.hex });
  };

  handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("length", e.currentTarget.value);
    this.setState({ currentRangeValue: parseInt(e.currentTarget.value) });
  };

  handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("mode", e.currentTarget.value);
    this.setState({ currentMode: e.currentTarget.value });
  };

  handleReset = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("mode", "Selection");
    localStorage.setItem("length", "20");
    localStorage.setItem("color", "#3f51b5");
    this.setState({
      currentRangeValue: 20,
      color: "#3f51b5",
      isOpen: false,
      currentMode: "Selection",
      genNewAksed: true
    });
    
    window.location.reload();
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
            <div style={{ marginRight: "15px", display: "flex" }}></div>
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
              <br />
              <SortMethod
                cm={this.state.currentMode}
                hmc={this.handleModeChange}
              />
              <Actions hr={this.handleReset} />
            </OffcanvasBody>
          </Offcanvas>
        </div>
        <div>
          <Lines
            cnt={this.state.currentRangeValue}
            color={this.state.color}
            cm={this.state.currentMode}
            gna={this.state.genNewAsked}
          />
        </div>
      </div>
    );
  }
}

export default Main;
