import './index.css';
import React from 'react';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProfileMenu from '../profile-menu';

// Links
const Home = props => <Link to="/home" {...props} />

const Header = ({ address }) => (
  <div className="root">
    <AppBar color="primary" position="static">
      <Toolbar>
          <div>
            <Logo />
          </div>
          <div className="links">
            <Button component={Home}>Home</Button>
          </div>
        <div className="address">
          <h5>{address ? address : 'No account found, try using MetaMask!'}</h5>
        </div>
        <div className="buttons">
          <div className="add-button">
            <Tooltip title="Add" aria-label="Add">
              <Fab color="secondary" className="fab">
                <AddIcon color="inherit"/>
              </Fab>
            </Tooltip>
          </div>
          <div className="profile-button">
            <ProfileMenu />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default (Header);
