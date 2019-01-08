import React from 'react';



function CustomInput(props) {
    return (
      <React.Fragment>
          <input 
             type='text' 
             name='title' 
             style={{padding: '5px', margin: '10px'}}
             placeholder="Start typing"
             
             onChange={props.onChange}
             />
         
      </React.Fragment>
    );
  }


export default CustomInput;
