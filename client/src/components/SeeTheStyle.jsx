import React from 'react';

const SeeTheStyle = props => {
  return (
    <div>
      <h1>SEE THE STYLE</h1>
      <div>case description: {props.specs.case_description}</div>
      <div>dial: {props.specs.dial}</div>
      <div>dial details: {props.specs.dial_details}</div>
      <div>strap: {props.specs.strap}</div>
      <div>interchangeable strap: {props.specs.interchangeable_strap}</div>
      <div>subdials: {props.specs.subdials}</div>
    </div>
  );
};

export default SeeTheStyle;
