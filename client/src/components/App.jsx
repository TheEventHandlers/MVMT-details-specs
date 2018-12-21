import React from 'react';

const App = props => {
  const url = window.location.href;
  const urlSections = url.split('/');
  const wid = urlSections[urlSections.length - 2];
  const displayString = `Watch id on current page is: ${wid}`;
  return <h1>{displayString}</h1>;
};

export default App;