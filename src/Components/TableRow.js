import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
  return (
    <tbody>
      {props.items.map((user, index) => {
        return (
          <tr key={user.username} className="user">
            <td className="user-rank">{index + 1}</td>
            <td className="user-img">
              <figure>
                <img src={user.img} alt={user.username} />
              </figure>
              <span className="user-name">{user.username}</span>
            </td>
            <td className="user-recent">{user.recent}</td>
            <td className="user-alltime">{user.alltime}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

UserRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

UserRow.defaultProps = {
  items: `Nothing came`
};
export default UserRow;
