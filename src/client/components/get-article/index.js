import React, { Fragment } from 'react';
import ipfs from '../../services/ipfs';

class GetArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hash: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({hash: event.target.value});
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const result = await ipfs.get(this.state.hash);
    console.log(result[0].content.toString());
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
        <label>
          Hash:
          <input type="text" value={this.state.hash} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </Fragment>
    );
  }
}

export default GetArticle;