import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';

const Header = () => (
    <AppBar color="primary" position="static">
        <Logo />
        <Link to="/">Home</Link>
        <Link to="/new-story">New Story</Link>
    </AppBar>
);

export default Header;