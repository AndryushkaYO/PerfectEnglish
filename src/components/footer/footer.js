import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={'footer'}>
        <div>
          PerfectEnglish
        </div>

        <span className={'footer__copyright'}>Pumpkin ©</span>
      </footer>
    )
  }
}

export default Footer;
