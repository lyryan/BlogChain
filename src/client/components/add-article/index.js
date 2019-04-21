import React, { Fragment } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ipfs from '../../services/ipfs';

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article,
      ipfsHash: '',
    }
  }

  onSubmit = async () => {
    const result = await ipfs.add(Buffer.from(JSON.stringify(this.state.article)));
    this.setState({ ipfsHash: result[0]['hash'] });

  }

  render() {
    return (
      <Fragment>
        <Tooltip title="Send">
          <IconButton onClick={this.onSubmit}>
            <SendIcon />
          </IconButton>
        </Tooltip>
        <h5>IPFS Hash: {this.state.ipfsHash}</h5>
      </Fragment>
    );
  }
}

export default AddArticle;