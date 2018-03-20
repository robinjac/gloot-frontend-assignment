/* This component handle each player entry. 
  It has two states, editing or display. */

import React from 'react';
import {ListGroupItem, Glyphicon, ButtonGroup, Button} from 'react-bootstrap';
import EditPanel from './editpanel.js';


export default class Player extends React.Component {
    constructor(props) {
      super(props);
      this.state = {editing: false, animation: "animated fadeInUp speed"};
      this.isEditing = this.isEditing.bind(this);
    }
  
    handleRemove() {
      this.setState({animation: "animated bounceIn"});
      /* This makes sure the remove animation shows before unmounting */
      setTimeout(() => this.props.remove(this.props.player.id), 280);
    }
  
    isEditing(yes) {yes ? this.setState({editing: true, animation: "animated fadeIn"}) : this.setState({editing: false})}
  
    render() {
      if(this.state.editing){
        return (
          <EditPanel edit={this.props.edit} id={this.props.player.id} editing={this.isEditing}/>
        );
      } else {
        /* This returns the display state of this component. Shows name and remove/edit button */
        return ( 
          <ListGroupItem className={this.state.animation}>
            {this.props.player.name}
            <ButtonGroup className="floatRight" bsSize="xsmall">
              <Button onClick={() => this.isEditing(true)}><Glyphicon glyph="pencil"/></Button>
              <Button onClick={() => this.handleRemove()} bsStyle="danger"><Glyphicon glyph="remove"/></Button>
            </ButtonGroup>
          </ListGroupItem>
        );
      }
    }
  }