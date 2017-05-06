import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
  return (
    <tbody>
      {props.users.map((user, index) => {
        return (
          <tr key={user.username}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.recent}</td>
            <td>{user.alltime}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

UserRow.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

UserRow.defaultProps = {
  users: `Nothing came`
};
export default UserRow;
