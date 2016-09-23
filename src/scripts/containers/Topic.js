import React, { PropTypes } from 'react';

export default function Topic({ params }) {
  // 9. the dynamic segments of a `pattern` (in this case `:topicId`)
  //    are parsed and sent to the component from `Match`.
  return (
    <div className="Topic">
      <h3>{params.topicId}</h3>
    </div>
  );
}

Topic.propTypes = {
  params: PropTypes.object.isRequired,
};
