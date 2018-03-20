/* This is the main script file for our player list app. 
  It binds everything togeather and renders to the DOM. */

import React from 'react';
import ReactDOM from 'react-dom';
import request from './CRUD.js';
import {BarLoader} from 'react-spinners';
import {ListGroup, Panel} from 'react-bootstrap';
import Player from '../components/player.js';
import AddPanel from '../components/addpanel.js'; 

/* Put each player component in the ListGroup */
function List(props) {
  const players = props.players.map(
    p => (
      <Player key={p.id} player={p} edit={props.edit} remove={props.remove}/>
    )
  )

  return (
    <ListGroup>{players}</ListGroup>
  )
}

/* In App we define the HTTP methods the player list uses. 
  We expose them to the rest of the components by passing 
  them down through props */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {playerList: [], loading: false};
  }

  componentDidMount() {
    this.updatePlayerList();
    this.setState({loading: true});
  }

  updatePlayerList() {
    request.getPlayers().then(
      players => {this.setState({playerList: players, loading: false})}
    );
  }

  addPlayer(name) {
    request.addPlayer(name).then( 
      () => {this.updatePlayerList()}
    );
    this.setState({loading: true});
  }

  removePlayer(id) {
    request.deletePlayer(id).then(
      () => {this.updatePlayerList()}
    );
    this.setState({loading: true});
  }

  editPlayer(id, name) {
    request.editPlayer(id, name).then(
      () => {this.updatePlayerList()}
    );
    this.setState({loading: true});
  }

  render() {
    return (
    <Panel>
      <Panel.Heading className="headingHeight">
        <center><h1 className="font">players</h1><BarLoader loading={this.state.loading} color={'#4a5b92'} height={1} width={250}/></center>
      </Panel.Heading>
      <Panel.Body>
        <AddPanel add={this.addPlayer.bind(this)}/>
        <br/>
        <div className="addScroll"> 
          <List edit={this.editPlayer.bind(this)} remove={this.removePlayer.bind(this)} players={this.state.playerList}/>
        </div>
      </Panel.Body>
    </Panel>);
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
