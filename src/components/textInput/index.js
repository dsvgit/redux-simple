import React from 'react';

let TextInput = props => {
  let {
    onChange
  } = props;


  return (
    <input {...props}
           type="text"
           onChange={(e) => { onChange(e, e.target.value); }} />
  );
};

export default TextInput;
