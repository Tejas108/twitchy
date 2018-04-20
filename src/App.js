import React, {Component} from 'react';
import Header from './Header';
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      online: 'all'
    }
  }

  handleLoadData = channel => {
     this.setState({ online: 'all' });
    const api_url = "https://wind-bow.glitch.me/twitch-api/channels/";
    fetch(api_url + channel)
      .then(response => response.json())
      .then(data => {
        let channels = this.state.data.concat(data);
        this.setState({ data: channels });
      })
  }

  handleShowOnline = () => {
    this.setState({ online: 'active' });
    console.log("handleShowOnline");
    console.log(this.state.online);
  }

  handleInitialLoad = () => {
    this.setState(
      {
        data: [],
        online: 'all'
      });
    let channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (let i = 0; i < channels.length; i++) {
      this.handleLoadData(channels[i]);
    }
  }

  componentWillMount() {
    this.handleInitialLoad();
  }

  render() {
    return (
      <div className="App">
        <Header showAll={this.handleInitialLoad} showOnline={this.handleShowOnline}/>
        <List data={this.state.data} filter={this.state.online}/>
      </div>
    )
  }
}