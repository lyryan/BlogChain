import './index.css';
import React from 'react';
import Logo from '../../assets/logo';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Button, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ProfileMenu from '../profile-menu';
import SearchBar from 'material-ui-search-bar';

// Links
const Home = props => <Link to="/" {...props} />
const NewStory = props => <Link to="/new-story" {...props} />

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchValue: "",
      }
    }

    handleSearch() {
       this.setState({
           searchValue: ''
       });
       this.props.history.push({
           pathname: "/search",
           search: this.state.searchValue
       });
    }

    render() {
        return (
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
                    <h5>{this.props.address ? this.props.address : 'No account found, try using MetaMask!'}</h5>
                  </div>
                  <div className="search-bar">
                    <SearchBar onChange={(value) => {this.setState({searchValue: value})}}
                      onRequestSearch={() => this.handleSearch()}
                      style={{ margin: '0 auto', maxWidth:800}} />
                  </div>
                  <div className="buttons">
                    <div className="add-button">
                      <Tooltip title="Add" aria-label="Add">
                        <Fab component={NewStory} size="small"
                          color="secondary"
                          className="fab">
                          <AddIcon color="primary" />
                        </Fab>
                      </Tooltip>
                    </div>
                    <div className="profile-button">
                      <ProfileMenu address = {this.state.address} />
                   </div>
                 </div>
               </Toolbar>
             </AppBar>
           </div>
         );
    }
}

export default withRouter(Header);
