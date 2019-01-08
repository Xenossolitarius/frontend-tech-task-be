import React from 'react';


function CustomOutput(props) {
    return (
      <React.Fragment>
         <p>
            {props.text}
          </p>
      </React.Fragment>
    );
  }


export default CustomOutput;
