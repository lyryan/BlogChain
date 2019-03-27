/* eslint-disable */

import React from 'react';

function CodeMark(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

export default CodeMark;
