import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { verifySignature } from '../../services/EthService';

class ProfileMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      auth: false,
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleLogin = async () => {
    const { address } = this.props;
    if (this.state.auth) {
      if (this.state.auth) {
        this.setState({
          auth: false,
        });
      }
    }
    else if (address) {
      const validSignature = await verifySignature();
      if (validSignature) {
        this.setState({
          auth: true,
        });
      }
    }
    this.handleClose();
  };

  render() {
    const { anchorEl, auth } = this.state;
    const open = Boolean(anchorEl);

    const Profile = props => <Link to="/profile" {...props} />

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Profile}>My Profile</MenuItem>
          <MenuItem onClick={this.toggleLogin}>{!auth ? 'Login' : 'Logout'}</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfileMenu;
