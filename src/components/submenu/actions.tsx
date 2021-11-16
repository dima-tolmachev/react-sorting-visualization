import React, { Component } from "react";
import { Button } from "reactstrap";


type Props = {
    hr: Function;
};

class Actions extends Component<Props> {
    render() {
        const { hr } = this.props; 
        
        return (
          <div style={{display:"flex", position:"absolute", width:"100%", gap: "1%", left:"0", bottom:"10px"}}>
            <Button color="primary" style={{flex:"1"}} onClick={hr.bind(this)}>Reset</Button>
            <Button color="primary" style={{flex:"1"}} onClick={event =>  window.location.href='https://github.com/dima-tolmachev/react-sorting-visualization'} >Source code</Button>
          </div>
        );
  }
}

export default Actions;