import React, { PropTypes } from 'react';

import 'styles/main.scss';
import testImg from 'images/test-image.jpg';

export default function App({ text }) {
  return (
    <div>
      {text}
      <img srcSet={testImg} alt="" />
    </div>
  );
}

App.propTypes = {
  text: PropTypes.string.isRequired,
};
