import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './index.css';

const articleData = [
  {
    title: 'title1',
    author: 'author1',
    date: 'date1',
  },
  {
    title: 'title2',
    author: 'author1',
    date: 'date1',
  },
  {
    title: 'title3',
    author: 'author1',
    date: 'date1',
  },
  {
    title: 'title4',
    author: 'author1',
    date: 'date1',
  },
  {
    title: 'title5',
    author: 'author1',
    date: 'date1',
  },
];

const ArticleList = () => (
  <div className="root">
    <div className="child">
      {articleData.map(article => (
        <Card key={article.title} className="article">
          <CardContent className="article-content">
            <h2>{article.title}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ArticleList;
