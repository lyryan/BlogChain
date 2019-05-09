import React, { Fragment } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ipfs from '../../services/ipfs';

import { getContractInstance, getAccount } from '../../services/EthService';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article,
      ipfsHash: '',
    }
  }

  async componentDidMount() {
    this.setState({
      contract: await getContractInstance(),
      account: await getAccount(),
    });
  }

  onSubmit = async () => {
    const result = await ipfs.add(Buffer.from(JSON.stringify(this.state.article)));
    this.setState({ ipfsHash: result[0]['hash'] });
    const response = await this.state.contract.methods.addArticle(this.state.ipfsHash).send({from: this.state.account});
    console.log(response);

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

export default Submit;