import React from 'react';
import { TextField } from '@material-ui/core';

import './index.css';

class TextEditor extends React.Component {
  render() {
    return (
        <div className="editor-container">
          <div className="editors">
            <h1>
                <TextField
                id="standard-name"
                label="Title"
                margin="normal"
                multiline
                />
            </h1>
            <body>
                <TextField
                id="standard-textarea"
                placeholder="Share your story..."
                multiline
                margin="normal"
                fullWidth
                />
            </body>
            </div>
        </div>
    );
  }
}

export default TextEditor;