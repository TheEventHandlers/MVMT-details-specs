import React from 'react';

const ReadTheSpecs = props => {
  return (
    <div>
      <h1> READ THE SPECS </h1>
      <div>case size: {props.specs.case_size}</div>
      <div>case thickness: {props.specs.case_thickness}</div>
      <div>strap width: {props.specs.strap_width}</div>
      <div>movement: {props.specs.movement}</div>
      <div>glass: {props.specs.glass}</div>
      <div>water resistance: {props.specs.water_resistance}</div>
    </div>
  );
};

export default ReadTheSpecs;
