import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Zoom from 'react-reveal/Zoom';
import Icon from '../../components/icons';
import Bottom from '../../components/pageBottom';
import CommentBox from '../../components/comment';
import ipfs from '../../services/ipfs';
import './index.css';

/*
 * This component renders a page for reading a posted article. 
 * It also provides functionality for sharing articles on social media
*/
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };
  }

  // scroll to the top of the page on each reload
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
  
  // render article author, article text and social media icons for sharing articles
  render() {
    return (
      <Fragment>
        <div className="article-body">
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
          <Bottom />
      </Fragment>
    );
  }
}

// component returning the title of an article
function ArtTitle(props) {
  return (
    <div>
      {props.title}
    </div>
  );
}

// component returning the author of an article
function Author(props) {
  return (
    <div className="author-body">
      <div className="author">
        by {props.author}
      </div>
    </div>
  );
}

// component returning the body of an article
function Text(props) {
  return (
    <div>
      {props.body}
    </div>
  );
}

export default Article;
