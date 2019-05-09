/* eslint-disable react/destructuring-assignment,class-methods-use-this */

import React from 'react';
const artData = require('../../pages/article/articleInfo');

const articleData = [
    {
        title: 'Article 1',
        author: 'Author1',
        date: 'Date1',
        text: 'Sample text for article 1',
    },
    {
        title: 'Article 2',
        author: 'Author2',
        date: 'Date2',
        text: 'Sample text for article 2',
    },
    {
        title: 'Title 3',
        author: 'Author3',
        date: 'Date3',
        text: 'Sample text for article 3',
    },
    {
        title: 'Title 4',
        author: 'Author4',
        date: 'Date4',
        text: 'Sample text for article 4',
    },
    {
        title: 'Title 5',
        author: 'Author5',
        date: 'Date5',
        text: 'Sample text for article 5',
    },
];
let map = new Map();
for(var i = 0; i < artData.length; i ++) {
    let data = artData[i];
    let arr = [];
    map.set(data.title, arr);
}
export default map;
