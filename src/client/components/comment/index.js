/* eslint-disable react/destructuring-assignment,class-methods-use-this */

// import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
import { Button } from 'reactstrap';
var React = require('react');
var createReactClass = require('create-react-class');

var commentData = [
    {
        author:"Shawn Spencer",
        text:"I've heard it both ways"
    },
    {
        author:"Burton Guster",
        text:"You hear about Pluto? That's messed up"
    }
];

var CommentBox = createReactClass({
    getInitialState: function() {
        return {
            data: commentData
        }
    },
    handleCommentSubmit: function(comment) {
        this.props.data.push(comment);
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
    },
    render: function() {
        return (
            <div className="comment-box">
            <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.props.data} />
        </div>
    );
    }
});
var CommentList = createReactClass({
    render: function() {
        return (
            <div className="comment-list">
            {this.props.data.map(function(c){
                return (
                    <Comment author={c.author} text={c.text} />
            );
            })}
    </div>
    );
    }
});
var CommentForm = createReactClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var authorVal = e.target[0].value.trim();
        var textVal = e.target[1].value.trim();
        if (!textVal || !authorVal) {
            return;
        }
        this.props.onCommentSubmit({author: authorVal, text: textVal});
        e.target[0].value = '';
        e.target[1].value = '';
        return;
    },
    render: function() {
        let style = {
            width: 100,
        }
        let textStyle = {
            fontSize: 16,
        }
        return(
            <form className="comment-form form-group" onSubmit={this.handleSubmit}>
              <div className="input-group" style={style}>
                <span className="input-group-name-addon">Name</span>
                <input type="text" placeholder="Your name" className="name-form-control" />
              </div>
              <div className="input-group">
                <span className="input-group-text-addon">Comment</span>
                <div>
                  <textarea className="textArea" type="text" placeholder="Join the discussion..."></textarea>
                </div>
              </div>
              <div className="post">
                <Button color="secondary" style={style} size="lg" type="submit" value="Post" className="btn btn-primary">Post</Button>
              </div>
            </form>
    );
    }
});
var Comment = createReactClass({
    render: function() {
        return (
            <div>
            <div className="comment">
                  <div className="avatar">
                    <Avatar size="30" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                  </div>
                <div >
                  <h2 className="auth">{this.props.author}</h2>
                </div>
            </div>
                <div className="commentText">
                  {this.props.text}
                </div>
            </div>
    );
    }
});

export default CommentBox;
