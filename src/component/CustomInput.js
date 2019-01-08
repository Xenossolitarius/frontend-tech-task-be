import React, { Component } from 'react';



class CustomInput extends Component {
  constructor(props){
      super(props);
      this.state = {
        text: ''
    }
  }

    render() {
    return (
      <React.Fragment>
          <input 
             type='text' 
             name='title' 
             style={{padding: '5px', margin: '10px'}}
             placeholder="Start typing"
             
             onChange={this.props.onChange}
             />
         
      </React.Fragment>
    );
  }
}

export default CustomInput;
