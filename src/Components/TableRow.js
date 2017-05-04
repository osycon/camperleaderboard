import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
  return (
    <tr>
      {this.props.children}
    </tr>
  );
};

// UserRow.propTypes = {
//   users: PropTypes.arrayOf()
// };

// UserRow.defaultProps = {
//   users: `Nothing came`
// };
export default UserRow;
