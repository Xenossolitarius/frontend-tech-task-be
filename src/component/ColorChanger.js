import React, { Component } from 'react';



class ColorChanger extends Component {
  constructor(props){
      super(props);
      this.state = {color: this.props.colors[0]};
      this.isBlack = true;
  }

  changeColors = (e) => {
      
    if(this.isBlack === true){ 
      this.setState({color: this.props.colors[retRandom()]});
    
    }else{
      this.setState({color: this.props.colors[0]});
    }
    this.isBlack = !this.isBlack;
}

    render() {
    return (
      <React.Fragment>
          <p className = 'unselectable' onClick={this.changeColors} style={{color: this.state.color}}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         
      </React.Fragment>
    );
  }
}

function retRandom(){
    return Math.floor(Math.random()*2)+1;
}

export default ColorChanger;
