import React from 'react';
import $ from 'jquery';
import parseUrl from 'parse-url';

import ReadTheSpecs from './ReadTheSpecs.jsx';
import SeeTheStyle from './SeeTheStyle.jsx';
import Buttons from './Buttons.jsx';

import styles from '../../dist/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: null,
      currentDisplay: 'read the specs'
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    this.setState({
      currentDisplay: e.target.innerText
    });
  }

  render() {
    if (this.state.specs === null) {
      return <div>Please enter a watch id between 100 and 199</div>;
    }

    let displayComponent;
    switch (this.state.currentDisplay) {
      case 'read the specs': 
        displayComponent = <ReadTheSpecs specs={this.state.specs} />;
        break;
      case 'see the style': 
        displayComponent = <SeeTheStyle specs={this.state.specs} />;
        break;
    }

    return (
      <div className="details-main-container">
        <img className="details-img" id="details-main-photo" src={this.state.specs.main_photo}/>
        <div className="details-right-container">
          <h1 className="details-h1">it's all in the details</h1>
          <Buttons clickHandler={this.handleClick} specs={this.state.specs} />
          {displayComponent}
        </div>
      </div>
    );  
  }
};

export default App;
