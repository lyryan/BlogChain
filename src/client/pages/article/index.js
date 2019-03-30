/* eslint-disable react/jsx-one-expression-per-line,react/destructuring-assignment,react/prefer-stateless-function,max-len,react/no-find-dom-node */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import Icon from '../../components/icons';
import Bottom from '../../components/pageBottom';
import ArticleList from '../../components/article-list';
import './index.css';

class Article extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
            <ArtTitle title={this.props.location.state.title} />
          </h2>
          <Author author={this.props.location.state.author} date={this.props.location.state.date} />
          <div className="article-text">
            <Text text={this.props.location.state.text} />
          </div>
        </div>
        <div className="list" >
          <ArticleList className="article-list" />
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
//  return 'Hello hheufhiuf dfkwhforf feuf1erhuifi rjgpeorgjerg wewqgqy jfbrguhrug fehwfoiwef jvruvhru9g4  4iugb45ugbu458 g45ygb458gyb5 45ugb458g5bg 45gb548g4bg5458g gygfyufguyf dufgweuyfg uweyfgweyufgeuyf efuefheyfgweyf weufewyfu euwfbewuy ufewyuf ufeyfgewyfgew ydgeyfgwe7fg eu  fgewyfgwey ufeyfgew0fgew';
  return (
    <div>
      {props.text}
    </div>
  );
}

export default Article;
