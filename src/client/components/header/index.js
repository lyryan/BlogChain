import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Logo from '../../assets/logo';

const Header = () => (
    <AppBar color="primary" position="static">
        <Logo />
    </AppBar>
);

export default Header;