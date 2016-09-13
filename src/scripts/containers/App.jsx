import React, { PropTypes } from 'react';

import 'styles/main';

import testImg from 'images/test-image';

export default function App({ text }) {
  return (
    <div>
      <h1 className="title">{text}</h1>
      <img srcSet={testImg} alt="" />
    </div>
  );
}

App.propTypes = {
  text: PropTypes.string.isRequired,
};
