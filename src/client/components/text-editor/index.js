import React from 'react';
import { TextField, Tooltip, IconButton, Dialog, DialogTitle, DialogActions, Button, DialogContentText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { withRouter } from 'react-router-dom';
import './index.css';
import ipfs from '../../services/ipfs';
import { getContractInstance, getAccount } from '../../services/EthService';
import { addToDB } from '../../services/BackendServce';

/*
 * Component rendering article submission form on the New Story page
*/
class TextEditor extends React.Component {
  state = {
    title: '',
    body: '',
    name: '',
    date: '',
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
    article.name = this.state.name;

    let today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    article.date = yyyy + '-' + mm + '-' + dd + ' ' + time;
    try {
      const result = await ipfs.add(Buffer.from(JSON.stringify(article)));
      this.setState({ ipfsHash: result[0]['hash'] });
      article.hash = result[0]['hash'];
      this.state.contract.methods.addArticle(this.state.ipfsHash).send({from: this.state.account}).then(console.log);

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
    
    console.log(article);

    addToDB(article);

  }

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="editor-container">
          <div className="editors">
            <div>
              <TextField
              id="standard-name"
              label="Title"
              margin="normal"
              onChange={this.handleChange('title')}
              multiline
              />
            </div>
            <div>
              <TextField
                id="standar-name"
                placeholder="Name (optional)"
                margin="normal"
                onChange={this.handleChange('name')}
                />
            </div>
            <div>
                <TextField
                id="standard-textarea"
                placeholder="Share your story..."
                multiline
                margin="normal"
                fullWidth
                onChange={this.handleChange('body')}
                />
            </div>
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
