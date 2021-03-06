import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import './component/ColorChanger'
import ColorChanger from './component/ColorChanger';
import CustomInput from './component/CustomInput';
import CustomOutput from './component/CustomOutput';


class App extends Component {
  constructor(props){
    super(props);
      this.state ={colors:['#000000'],
      text: ''
    }
  }

  componentDidMount(){
   Promise.all([
    fetch('http://www.colr.org/json/color/random'),
    fetch('http://www.colr.org/json/color/random')
   ]).then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
   .then(([data1, data2]) => this.setState( prevState => ({
     colors: [...prevState.colors, '#' + data1.colors[0].hex, '#' + data2.colors[0].hex]
   })));
       
   
}

onChange = (e) => this.setState({text: e.target.value});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColorChanger colors={this.state.colors}  />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <CustomInput onChange={this.onChange} />

          <CustomOutput text={this.state.text}/>
        </header>
      </div>
    );
  }
}

export default App;
