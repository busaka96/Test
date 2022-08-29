import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './component/header'
import Exchange from './component/exchange'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      exchange: null,
      exchangeUpd: false
    }
  }
  componentDidMount(){
    const xhr = new XMLHttpRequest();
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?date=YYYYMMDD'
  
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
      console.log('false')
    } else {
      this.setState({exchange: xhr.responseText, exchangeUpd: true});
    }
}
  render(){
    if(this.state.exchange != null){
    return(
      <div className="App">
        <div className='container'>
          <Header exchange={this.state.exchange} upd={this.state.exchangeUpd}/>
          <Exchange exchange={this.state.exchange} upd={this.state.exchangeUpd}/>
        </div>
      </div>
    )
  }
}
  
}
