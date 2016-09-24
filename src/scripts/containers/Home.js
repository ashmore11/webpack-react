import React from 'react';
import connect from 'react-redux';

import { increment } from 'actions/count';

function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
    </div>
  );
}

const mapStateToProps = () => ({
  count: 1,
});

// Home.propTypes = {
//   count: PropTypes.number.isRequired,
// };

export default connect(mapStateToProps)(Home);

// import React, { PropTypes } from 'react';
// import connect from 'react-redux';

// import { increment } from 'actions/count';

// function Home({ count, onIncrement }) {
//   function buttonClicked() {
//     onIncrement();
//   }

//   return (
//     <div className="Home">
//       <h2>Home</h2>
//       <span>Count: {count}</span>
//       <button onClick={buttonClicked}></button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   count: state.count,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => {
//     dispatch(increment());
//   },
// });

// Home.propTypes = {
//   count: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
