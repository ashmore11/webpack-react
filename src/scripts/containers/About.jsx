import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { firebase as db, helpers } from 'redux-react-firebase';

const { isLoaded, dataToJS } = helpers;

const mapStateToProps = (state) => ({
  about: dataToJS(state.firebase, 'about'),
});

@db(['about'])
@connect(mapStateToProps)

export default class About extends Component {
  static propTypes = {
    firebase: PropTypes.object,
    about: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.handleUpdate = ::this.handleUpdate;
  }

  handleUpdate(event) {
    const { firebase } = this.props;
    const text = event.target.value;

    firebase.set('/about/text', text);
  }

  render() {
    const { about } = this.props;

    if (!isLoaded(about)) return <span>Loading</span>;

    return (
      <div className="About">
        <h2>{about.title}</h2>
        <p>{about.text}</p>
        <input type="text" ref="text" onChange={this.handleUpdate} />
      </div>
    );
  }
}
