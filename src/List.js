import React,{Component} from 'react';

export default class List extends Component {

  render() {
    const items = this.props.channel;
    //console.log('props: ' + items);
    return (
      <ul>
        {/*{items.map( (item,i) => <li key={i}>{item.name}</li> )}*/}
      </ul>
    )
  }
}

