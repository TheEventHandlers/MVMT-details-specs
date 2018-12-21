import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      specs: null
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const urlSections = url.split('/');
    const wid = urlSections[urlSections.length - 2];
    const successFn = specs => {
      this.setState({
        id: wid,
        specs: specs
      });
    };
    $.ajax({
      url: `/api/watches/${wid}/details`,
      success: successFn
    });
  }

  render() {
    const specs = this.state.specs;
    if (specs !== null) {
      return (
        <div>
          <div>series: {specs.series}</div>
          <div>name: {specs.name}</div>
          <div>main-photo:<img src={specs.main_photo}></img></div>
          <div>fit-photo:<img src={specs.fit_photo}></img></div>
          <div>case size: {specs.case_size}</div>
          <div>case thickness: {specs.case_thickness}</div>
          <div>strap width: {specs.strap_width}</div>
          <div>movement: {specs.movement}</div>
          <div>glass: {specs.glass}</div>
          <div>water resistance: {specs.water_resistance}</div>
          <div>case description: {specs.case_description}</div>
          <div>dial: {specs.dial}</div>
          <div>dial details: {specs.dial_details}</div>
          <div>strap: {specs.strap}</div>
          <div>interchangeable strap: {specs.interchangeable_strap}</div>
          <div>subdials: {specs.subdials}</div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
};

export default App;