/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea } from '@material-ui/core';
import { CardImg } from 'reactstrap';
import './index.css';

const artData = require('../../pages/article/articleInfo');

/*
 * ArticleList component renders the list of articles on a page
*/
class ArticleList extends React.Component {
  render() {
    return (
        <Articles artTitle={this.props.title} />
    );
  }
}

/*
 * The function reloading the page to its top
*/
function reload() {
  window.scrollTo(0, 0);
}

/*
 * Component rendering each individual article on a page
*/
class Articles extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           articles: []
       }
       fetch('http://localhost:3300/comments')
           .then(response => response.json())
           .then(response => this.setState({ articles: response.data} ))
           .catch(err => console.log(err));
   }
   /* Use Material UI Card to render all information about an article*/
   render() {
   const style = {
        textDecoration: null,
        color: 'black',}
        const ar = this.props.artTitle;
        const state = this.state.articles;
        return (
            <div
            className = "root"
            href = "/article">
             <div className = "child">
                {state.map(function (article, i) {
                    if (article.title !== ar) {
                        return (
                            <Card key = {article.title}
                            className="article">
                            <CardActionArea>
                            <Link onClick = {reload}
                              to={{
                               pathname: "/article/${articleData[i].title}",
                               state: {title: article.title,
                               author: article.author,
                               date: article.date,
                               text: article.text,
                            }
                          }
                        }>
                    <CardImg
                        top
                        width = "100%"
                        height = "90%"
                        src = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" / >
                            <CardContent
                              className="card-content" >
                             <div className = "art-title"
                               style={style}>
                               {article.title}
                             </div>
                             <div className = "art-author"
                                style={style}>
                                {article.author}
                            </div>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                  </Card>
                )
              }
           })
         }
        </div>
      </div>
    );
  }
}

export default ArticleList;
