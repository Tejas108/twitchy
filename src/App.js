import React, {Component} from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData(channel) {
    const api_url = "https://wind-bow.glitch.me/twitch-api/channels/";
    fetch(api_url + channel)
      .then(response => response.json())
      .then(data => {
        let channels = this.state.data.concat(data);
        this.setState({data: channels});
      })
  }

  componentWillMount() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (let i = 0; i < channels.length; i++) {
      this.loadData(channels[i]);
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.data.map(item => <li key={item._id}>
              <img src={item.logo} height="50" width="50"/>
              <span>{item.display_name}</span>
              <span>{item.status ? item.status : "Offline"}</span>
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
