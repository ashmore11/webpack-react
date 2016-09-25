import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-react-firebase';

const { isLoaded, dataToJS } = helpers;

const mapStateToProps = (state) => ({
  about: dataToJS(state.firebase, 'about'),
});

@firebase(['about'])
@connect(mapStateToProps)

// eslint-disable-next-line react/prefer-stateless-function
export default class About extends Component {
  static propTypes = {
    firebase: PropTypes.object,
    about: PropTypes.object,
  };

  render() {
    const { about } = this.props;

    if (!isLoaded(about)) return <span>Loading</span>;

    return (
      <div className="About">
        <h2>{about.title}</h2>
      </div>
    );
  }
}
