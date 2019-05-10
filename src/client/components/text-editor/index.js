import React from 'react';
import { TextField, Tooltip, IconButton, Dialog, DialogTitle, DialogActions, Button, DialogContentText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withRouter } from 'react-router-dom';
import './index.css';

import ipfs from '../../services/ipfs';
import { getContractInstance, getAccount } from '../../services/EthService';
import { FullscreenExit } from '@material-ui/icons';

class TextEditor extends React.Component {

  state = {
    title: '',
    body: '',
    ipfsHash: '',
    open: false,
    dialogTitle: '',
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.push("/");
  };

  async componentDidMount() {
    this.setState({
      contract: await getContractInstance(),
      account: await getAccount(),
    });
  }

  onSubmit = async () => {
    const article = {};
    article.title = this.state.title;
    article.body = this.state.body;
    article.author = this.state.account;

    try {
      const result = await ipfs.add(Buffer.from(JSON.stringify(article)));
      this.setState({ ipfsHash: result[0]['hash'] });
      this.state.contract.methods.addArticle(this.state.ipfsHash).send({from: this.state.account}).then(console.log);
      // console.log(response);

      this.setState({ 
        dialogTitle: 'Success!',
        dialogBody: 'Article was succesfully stored in IPFS and transaction sent to the Ethereum Network',
        open: true,
      });

    } catch(err) {
      this.setState({
        dialogTitle: 'Failed!',
        dialogBody: 'Article failed to be stored. Failed connection to IPFS or Ethereum Network.', 
        open: true
      });
      console.log(err);
    }

  }

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="editor-container">
          <div className="editors">
            <h1>
                <TextField
                id="standard-name"
                label="Title"
                margin="normal"
                onChange={this.handleChange('title')}
                multiline
                />
            </h1>
            <body>
                <TextField
                id="standard-textarea"
                placeholder="Share your story..."
                multiline
                margin="normal"
                fullWidth
                onChange={this.handleChange('body')}
                />
            </body>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
              <Tooltip title="Post">
                <IconButton onClick={this.onSubmit}>
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </div>
        </div>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <div className="dialog-title">
            <DialogTitle>{this.state.dialogTitle}</DialogTitle>
          </div>
          <div className="dialog-text">
            <DialogContentText>{this.state.dialogBody}</DialogContentText>
            <DialogContentText>IPFS Hash: <b>{this.state.ipfsHash}</b></DialogContentText>
          </div>
          <DialogActions>
            <Button onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(TextEditor);