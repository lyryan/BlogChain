import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class ProfileMenu extends React.Component {


  render() {

    const Profile = props => <Link to="/profile" {...props} />

    return (
      <div>
        <IconButton
          component={Profile}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    );
  }
}

export default ProfileMenu;
