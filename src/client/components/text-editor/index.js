import React from 'react';
import { TextField } from '@material-ui/core';

import './index.css';

class TextEditor extends React.Component {
  render() {
    return (
        <div className="editor-container">
            <div>
                <TextField
                id="standard-name"
                label="Title"
                margin="normal"
                />
            </div>
            <div>
                <TextField
                id="standard-textarea"
                placeholder="Share your story..."
                multiline
                margin="normal"
                fullWidth
                />
            </div>
        </div>
    );
  }
}

export default TextEditor;