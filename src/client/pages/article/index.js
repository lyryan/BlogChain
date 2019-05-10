import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Zoom from 'react-reveal/Zoom';
import Icon from '../../components/icons';
import Bottom from '../../components/pageBottom';
import CommentBox from '../../components/comment';
import ipfs from '../../services/ipfs';
import './index.css';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    const response = await ipfs.get(this.props.location.search.substr(2));
    const article = JSON.parse(response[0].content.toString());

    this.setState({
      title: article.title,
      body: article.body,
      author: article.author,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="article-body">
          <Helmet>
            <style>{'body { background-color: azure; }'}</style>
          </Helmet>
          <div className="icons">
            <Zoom left>
              <Icon />
            </Zoom>
          </div>
          <h2 className="article-title">
            <ArtTitle title={this.state.title} />
          </h2>
          <Author author={this.state.author}/>
          <div className="article-text">
            <Text body={this.state.body} />
          </div>
        </div>
          <div className="comment-box">
              <CommentBox data={[]} replyD={[]}/>
          </div>
          <Bottom />
      </Fragment>
    );
  }
}

function ArtTitle(props) {
  return (
    <div>
      {props.title}
    </div>
  );
}

function Author(props) {
  return (
    <div className="author-body">
      <div className="author">
        by {props.author}
      </div>
      <div className="publish-date">
        Published on {props.date}
      </div>
    </div>
  );
}

function Text(props) {
  return (
    <div>
      {props.body}
    </div>
  );
}

export default Article;
