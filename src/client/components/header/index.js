import './index.css';
import React from 'react';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProfileMenu from '../profile-menu';

// Links
const Home = props => <Link to="/home" {...props} />

const Header = () => (
  <div className="root">
    <AppBar color="primary" position="static">
      <Toolbar>
          <Logo />
          <div className="links">
            <Button component={Home}>Home</Button>
          </div>
        <Tooltip title="Add" aria-label="Add">
          <Fab color="primary" className="fab">
            <AddIcon />
          </Fab>
        </Tooltip>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  </div>
);

export default (Header);
