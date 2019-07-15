import React, { Component } from 'react';

const logo = require('@mdsol/sandman/assets/Medidata_Logo_white.png');

const Logo = () => <img src={logo} alt="Medidata Solutions"/>

export default class DocHeader extends Component {
  render() {
    return <div className="doc-header">
        <Logo />
        <small className="pull-right">
          <span>MDS demo</span>
        </small>
      </div>;
  }
}
