import React, { PropTypes } from 'react';

import 'styles/main.scss';

export default function App({ text }) {
  console.log('some test');
  return (
    <div>
      {text}
      <span> Testing</span>
    </div>
  );
}

App.propTypes = {
  text: PropTypes.string.isRequired,
};
