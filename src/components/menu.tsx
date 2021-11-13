import React, { Component } from "react";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import ArrayRange from "./submenu/arrayRange";
import ArrayColor from "./submenu/arrayColor";

class Menu extends Component {
  state = {
    autoFocus: true,
    backdrop: true,
    backdropClassName: "",
    backdropTransition: {
      mountOnEnter: true,
      timeout: 100,
    },
    children: React.Children,
    container: "body",
    cssModule: {},
    direction: "start",
    fade: true,
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <div style={{width:"100%", marginTop:"10px"}}>
          <div style={{float:"left", marginLeft:"5px"}}>
            <Button color="primary" onClick={this.toggle}>
              Settings
            </Button>
          </div>

          <div style={{float:"right", marginRight:"5px"}}>
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
            <ArrayRange />
            <br />
            <ArrayColor />
          </OffcanvasBody>
        </Offcanvas>
      </div>
    );
  }
}

export default Menu;
