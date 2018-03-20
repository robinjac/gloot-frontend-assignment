/* This component handles the adding of new players to the list. */

import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';


export default class AddPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:'', animation: ""};
    }
  
    handleAdd(name){
      if(name ===''){
        this.setState({animation: "shake"})
        setTimeout(() => this.setState({animation: ""}), 1000); //Used to reset animation.
      }else{
        this.props.add(name);
        this.setState({name:''});
      }
    }
  
    render() {
      return (
        <div className={"input-group " + this.state.animation}>
          <input value={this.state.name} className="form-control" onChange={e => this.setState({name: e.target.value})} type="text" placeholder="name"/><span className="input-group-btn"><Button bsStyle="success" onClick={() => this.handleAdd(this.state.name)}><Glyphicon glyph="plus" /></Button></span>
        </div>
      );
    }
  }
  