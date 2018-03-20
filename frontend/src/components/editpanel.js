/* This component represents one of the player component's states. 
It has similar functionality as AddPanel */

import React from 'react';
import {ListGroupItem, Glyphicon, Button} from 'react-bootstrap';


export default class EditPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:'', animation: ""};
    }
  
    handleEdit(id, name){
      if(name ===''){
        this.setState({animation: "shake"})
        setTimeout(() => this.setState({animation: ""}), 1000);
      }else{
        this.props.edit(id, name);
        this.setState({name:''});
        this.props.editing(false);
      }
    }
  
    render() {
      return (
        <ListGroupItem className="animated slideInLeft speed">
          <div className={"input-group " + this.state.animation}>
            <input value={this.state.name} className="form-control input-sm" onChange={e => this.setState({name: e.target.value})} type="text" placeholder="name"/>
            <span className="input-group-btn"> 
              <Button bsSize="small" onClick={() => this.handleEdit(this.props.id, this.state.name)} bsStyle="warning"><Glyphicon glyph="ok" /></Button>
              <Button bsSize="small" onClick={() => this.props.editing(false)}><Glyphicon glyph="remove"/></Button>
            </span>
          </div>
        </ListGroupItem>
      );
    }
  }