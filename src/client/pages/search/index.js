import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import ipfs from '../../services/ipfs';



class Search extends React.Component {
    constructor(props) {
        super(props);
        if(this.cleanInput(this.props.location.search.substr(1))) {
            this.state = { 
                badInput: false,
                queryString: this.props.location.search.substr(1),
            };
        } else {
            this.state = { 
                badInput: true, 
                queryString: '',
            };
        }
    }

    cleanInput = async(queryString) => {
        const result = await ipfs.get(queryString);
        console.log(result[0].content.toString());
        return true;
    }

    render() {
        return (
            <h5>Test</h5>
        );
    }
}

export default withRouter(Search);
