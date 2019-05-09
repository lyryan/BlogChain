/* eslint-disable react/destructuring-assignment,class-methods-use-this */

import './index.css';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
import { Button } from 'reactstrap';
import But from '@material-ui/core/Button';

var React = require('react');
var createReactClass = require('create-react-class');

var replyData = [];

/*
 * Component for rendering comments to an article
*/
var CommentBox = createReactClass({
    getInitialState: function() {
        return {
            data: this.props.data,
            replyD: this.props.replyD
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
              <CommentForm data={this.props.data} replyD={this.props.replyD} onCommentSubmit={this.handleCommentSubmit} />
              <CommentList data={this.props.data} replyD={this.props.replyD} />
            </div>
    );
    }
});

/*
 * Component rendering the list of comments
*/
var CommentList = createReactClass({
    render: function() {
        var ar = this.props.data;
        return (
            <div className="comment-list">
            {this.props.data.map(function(c){
                return (
                  <div key={c.replyD}>
                    <Comment author={c.author} text={c.text} data={ar} replyD={c.replyD}/>
                 </div>
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
            fontSize: 10,
            height: 30,
            width: 3,
        }
        return(
            <form onSubmit={this.handleSubmit}>
            <input placeholder="Name" type="text"/>
            <textarea placeholder="Join the discussion..."></textarea>
            <div className="post">
            <But className="btn btn-primary" type="submit" value="Post"  style={style} >Post</But>
            </div>
            </form>
    );
    }
});
var Comment = createReactClass({

    render: function() {
        var replyData = [];
        return (
            <div>
              <div className="comment">
                <div className="avatar">
                  <Avatar size="30" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                </div>
                <div>
                  <h2 className="auth">{this.props.author}</h2>
                </div>
              </div>
              <div className="commentText">
                {this.props.text}
              </div>
              <ReplyBox data={[]} replyD={[]} />
            </div>
      );
    }
});

var ReplyBox = createReactClass({
    getInitialState: function() {
        return {
            data: replyData,
            replyD: this.props.replyD,
            reply: false,
            replyBox: true,
            up: 0,
            down: 0,
        }
    },
    handleReplySubmit: function(comment) {
        this.props.data.push(comment);
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({
            data: newComments
        })
    },
    changeReplyState: function() {
        this.setState({
            reply: !this.state.reply
        })
    },
    changeBoxState: function() {
        this.setState({
            replyBox: !this.state.replyBox
        })
    },

    handleUpvote: function() {
        this.setState({
            up: this.state.up + 1,
        })
    },

    handleDownvote: function() {
        this.setState({
            down: this.state.down + 1,
        })
    },

    render: function() {
        if((this.state.reply && this.state.replyBox) || (!this.state.reply && !this.state.replyBox)) {
            return (
                <div className="reply-form">
                  <div className="vote-box">
                    <div className="upCount" onClick={this.handleUpvote}>
                      {this.state.up}
                    </div>
                    <div title="Upvote">
                      <svg className="upvote" onClick={this.handleUpvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>
                    </div>
                    <div className="downCount" onClick={this.handleDownvote}>
                      {this.state.down}
                    </div>
                    <div title="Downvote">
                      <svg className="downvote" onClick={this.handleDownvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
                    </div>
                  </div>
                  <ReplyForm data={this.state.data} replyD={this.state.replyD} changeBoxState={this.changeBoxState} onCommentSubmit={this.handleReplySubmit}/ >
                  <ReplyList data={this.state.data} replyD={this.state.replyD} />
              </div>
        );
        }
        else if(!this.state.reply && this.state.replyBox) {
            return (
                <div>
                  <div className="reply">
                    <div className="vote-reply-box">
                      <div className="upCount" onClick={this.handleUpvote}>
                        {this.state.up}
                      </div>
                      <div title="Upvote">
                        <svg className="upvote" onClick={this.handleUpvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>
                      </div>
                      <div className="downCount" onClick={this.handleDownvote}>
                        {this.state.down}
                      </div>
                      <div title="Downvote">
                        <svg className="downvote" onClick={this.handleDownvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
                      </div>
                    </div>
                    <But className="reply" onClick = {this.changeReplyState}
                      size = "lg"
                      type = "submit"
                      value = "Post"
                      >Reply</But>
                  </div>
                  <div className="reply-list-inner">
                    <ReplyList data={this.state.data} replyD={this.state.replyD}/>
                  </div>
                </div>
        );
        }

        else if(!this.state.replyBox) {
            return (
                <div>
                  <div className ="reply">
                    <div className="vote-reply-box">
                      <div className="upCount" onClick={this.handleUpvote}>
                        {this.state.up}
                       </div>
                       <div title="Upvote">
                         <svg className="upvote" onClick={this.handleUpvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>
                       </div>
                       <div className="downCount" onClick={this.handleDownvote}>
                         {this.state.down}
                       </div>
                       <div title="Downvote">
                         <svg className="downvote" onClick={this.handleDownvote} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
                       </div>
                     </div>
                     <But onClick = {this.changeReplyState} size = "lg" type = "submit" value = "Post">Reply</But>
                   </div>
                   <div className = "reply-list-inner" >
                     <ReplyList data={this.state.data} replyD={this.state.replyD}/>
                   </div>
                 </div>
        );
        }
    }
});

var ReplyForm = createReactClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.changeBoxState();
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
            width: 50,
        }
        let textStyle = {
            fontSize: 12,
        }
        return(
            <form onSubmit={this.handleSubmit}>
            <input placeholder="Name" type="text"/>
            <textarea placeholder="Join the discussion..."></textarea>
            <div className="form-reply">
            <But className="btn btn-primary" type="submit" value="Post"  style={style} >Reply</But>
            </div>
            </form>
    );
    }
});

var ReplyList = createReactClass({
    render: function() {
        return (
            <div className="comment-list">
            {this.props.data.map(function(c){
                return (
                    <Reply author={c.author} text={c.text} data={c.data} replyD={c.replyD}/>
            );
            })}
    </div>
    );
    }
})

var Reply = createReactClass({
    render: function() {
        return (
            <div>
              <div className="comment">
                <div className="avatar">
                  <Avatar size="30" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                </div>
                <div>
                  <h2 className="auth">{this.props.author}</h2>
                </div>
              </div>
              <div className="commentText">
                {this.props.text}
              </div>
              <div>
                <ReplyBox data={[]} replyD={[]}/>
              </div>
           </div>
    );
    }
})

export default CommentBox;
