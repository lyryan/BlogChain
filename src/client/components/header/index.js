import './index.css';
import React from 'react';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProfileMenu from '../profile-menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
// import { AutoComplete } from 'material-ui/AutoComplete';

// Links
const Home = props => <Link to="/home" {...props} />
const NewStory = props => <Link to="/new-story" {...props} />

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

const Header = ({ address }, props) => (
  <div className="root">
    <AppBar className="head" color="primary" position="static">
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
        <div className="search-bar">
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
           }}
          />
        </div>
        <div className="buttons">
          <div className="add-button">
            <Tooltip title="Add" aria-label="Add">
              <Fab component={NewStory} color="secondary" className="fab">
                <AddIcon color="inherit"/>
              </Fab>
            </Tooltip>
          </div>
          <div className="profile-button">
            <ProfileMenu address={address} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
