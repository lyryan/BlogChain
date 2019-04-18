/* eslint-disable */

import React, { Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import {
  BoldMark,
  ItalicMark,
  CodeMark,
  StrikeMark,
  UnderlineMark,
  Toolbar,
  Subtitle
} from './index';
import Icon from 'react-icons-kit';
import { ic_format_bold } from 'react-icons-kit/md/ic_format_bold';
import { ic_format_italic } from 'react-icons-kit/md/ic_format_italic';
import { ic_code } from 'react-icons-kit/md/ic_code';
import { ic_format_underlined } from 'react-icons-kit/md/ic_format_underlined';
import { ic_text_fields } from 'react-icons-kit/md/ic_text_fields';
import Popover from 'react-text-selection-popover';
import './TextEditor.css';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'title',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: ''
              }
            ]
          }
        ]
      },
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            ]
          }
        ]
      }
    ]
  }
});

function MarkHotKey(options) {
  // Grab options from the ones passed in
  const { type, key } = options;

  return {
    onKeyDown(event, change, next) {
      if (!event.ctrlKey || event.key != key) {
        return next();
      }
      // Prevent default char from being inserted
      event.preventDefault();

      // Toggle the mark 'type'
      change.toggleMark(type);
    }
  };
}

const plugins = [
  MarkHotKey({ key: 'b', type: 'bold' }),
  MarkHotKey({ key: '`', type: 'code' }),
  MarkHotKey({ key: 'i', type: 'italic' }),
  MarkHotKey({ key: 's', type: 'strikethrough' }),
  MarkHotKey({ key: 'u', type: 'underline' })
];

// Define structure for document
const schema = {
  document: {
    nodes: [
      { match: { type: 'title' }, min: 1, max: 1 },
      { match: { type: 'paragraph' }, min: 1 }
    ],
    normalize: (change, { code, node, child, index }) => {
      switch (code) {
        case 'child_type_invalid': {
          const type = index === 0 ? 'title' : 'paragraph';
          return change.setNodeByKey(child.key, type);
        }
        case 'child_required': {
          const block = Block.create(index === 0 ? 'title' : 'paragraph');
          return change.insertNodeByKey(node.key, index, block);
        }
      }
    }
  }
};

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: initialValue };
    this.editor = React.createRef();
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  onMarkClick = (event, type) => {
    event.preventDefault();
    this.editor.current.toggleMark(type);
  };

  onHighlight = event => {
    event.preventDefault();
  };

  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />;
      case 'italic':
        return <ItalicMark {...props} />;
      case 'code':
        return <CodeMark {...props} />;
      case 'strikethrough':
        return <StrikeMark {...props} />;
      case 'underline':
        return <UnderlineMark {...props} />;
      case 'subtitle':
        return <Subtitle {...props} />;
      default: {
        return;
      }
    }
  };

  // Renders a Slate node
  renderNode = props => {
    const { attributes, children, node } = props;
    switch (node.type) {
      case 'title':
        return <h1 {...attributes}>{children}</h1>;
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
    }
  };

  render() {
    return (
      <Fragment>
        <Popover>
          <Toolbar onPointerUp={this.showToolbar}>
            <button
              onPointerDown={event => this.onMarkClick(event, 'subtitle')}
              className="toolbar-icon-btn"
            >
              <Icon icon={ic_text_fields} size={25} />
            </button>
            <button
              onPointerDown={event => this.onMarkClick(event, 'bold')}
              className="toolbar-icon-btn"
            >
              <Icon icon={ic_format_bold} size={25} />
            </button>
            <button
              onPointerDown={event => this.onMarkClick(event, 'italic')}
              className="toolbar-icon-btn"
            >
              <Icon icon={ic_format_italic} size={25} />
            </button>
            <button
              onPointerDown={event => this.onMarkClick(event, 'underline')}
              className="toolbar-icon-btn"
            >
              <Icon icon={ic_format_underlined} size={25} />
            </button>
            <button
              onPointerDown={event => this.onMarkClick(event, 'code')}
              className="toolbar-icon-btn"
            >
              <Icon icon={ic_code} size={25} />
            </button>
          </Toolbar>
        </Popover>
        <Editor
          schema={schema}
          className="editor-content"
          ref={this.editor}
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
          renderMark={this.renderMark}
          spellCheck
          renderNode={this.renderNode}
        />
      </Fragment>
    );
  }
}
