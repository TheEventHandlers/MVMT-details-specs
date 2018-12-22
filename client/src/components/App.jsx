import React from 'react';
import $ from 'jquery';
import parseUrl from 'parse-url';

import ReadTheSpecs from './ReadTheSpecs.jsx';
import SeeTheStyle from './SeeTheStyle.jsx';
import styles from '../../dist/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: null,
      currentDisplay: 'Read The Specs'
    };
  }

  componentDidMount() {
    const parsedUrl = parseUrl(window.location.href);
    const pathname = parsedUrl.pathname;
    const wid = pathname.substring(pathname.length - 3); 
    if (wid < 100 || wid > 199) { return; }

    const successFn = specs => {
      this.setState({ specs: specs });
    };

    $.ajax({
      url: `/api/watches/${wid}/details`,
      success: successFn
    });
  }

  // render() {
  //   const specs = this.state.specs;
  //   if (specs !== null) {
  //     return (
  //       <div>
  //         <div>series: {specs.series}</div>
  //         <div>name: {specs.name}</div>
  //         <div>main-photo:<img src={specs.main_photo}></img></div>
  //         <div>fit-photo:<img src={specs.fit_photo}></img></div>
  //         <div>case size: {specs.case_size}</div>
  //         <div>case thickness: {specs.case_thickness}</div>
  //         <div>strap width: {specs.strap_width}</div>
  //         <div>movement: {specs.movement}</div>
  //         <div>glass: {specs.glass}</div>
  //         <div>water resistance: {specs.water_resistance}</div>
  //         <div>case description: {specs.case_description}</div>
  //         <div>dial: {specs.dial}</div>
  //         <div>dial details: {specs.dial_details}</div>
  //         <div>strap: {specs.strap}</div>
  //         <div>interchangeable strap: {specs.interchangeable_strap}</div>
  //         <div>subdials: {specs.subdials}</div>
  //       </div>
  //     );
  //   } else {
  //     return <div>Please enter a watch id between 100 and 199</div>
  //   }
  // }

  render() {
    if (this.state.specs === null) {
      return <div>Please enter a watch id between 100 and 199</div>;
    }

    let component;

    switch (this.state.currentDisplay) {
      case 'Read The Specs': 
        component = <ReadTheSpecs specs={this.state.specs} />;
        break;
      case 'See The Style': 
        component = <SeeTheStyle specs={this.state.specs} />;
        break;
    }

    return component;
  }
};

export default App;