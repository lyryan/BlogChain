import React from 'react';
import Logo from '../../assets/logo';

/*
 * Component rendering the bottom part of the page (BlogChain logo and copyright information)
*/
const Bottom = () => (
  <div className="bottom">
    <div className="logo">
      <Logo />
    </div>
    <div className="copyright">
      Copyright © 2019 BlogChain All Rights Reserved
    </div>
  </div>
);

export default Bottom;
