import React, {Component} from 'react';
import Header from './Header';
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: 'on'
    }
  }

  handleLoadData = channel => {
    this.setState({ status: 'on' });
    const api_url = "https://wind-bow.glitch.me/twitch-api/channels/";
    fetch(api_url + channel)
      .then(response => response.json())
      .then(data => {
        let channels = this.state.data.concat(data);
        this.setState({ data: channels });
      })
  }

  handleShowOnline = () => {
    this.setState({ status: 'off' });
  }

  handleInitialLoad = () => {
    this.setState({ data: [] });
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (let i = 0; i < channels.length; i++) {
      this.handleLoadData(channels[i]);
    }
  }

  componentWillMount() {
    this.handleInitialLoad();
  }

  render() {
    let data = '';
    this.state.status === 'off' ? data = this.state.data.filter((item) => item.status) : data = this.state.data;
    return (
      <div className="App">
        <Header showAll={this.handleInitialLoad} showOnline={this.handleShowOnline}/>
        <List data={data} status={this.state.status}/>
      </div>
    )
  }
}