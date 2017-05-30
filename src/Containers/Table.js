import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { itemsFetchData } from '../actions/users';
import TableRow from '../Components/TableRow';

const ROOT_URL = `https://fcctop100.herokuapp.com/api/fccusers/top/`;

class Table extends Component {
  componentDidMount() {
    this.props.fetchData(`${ROOT_URL}recent`, `recent`);
  }
  render() {
    console.log(`in table`, this.props);
    return (
      <div className="wrap-table">
        <table>
          <caption className="table-title">Leaderboard</caption>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Camper Name</th>
              <th>
                <button
                  className={`recent ${this.props.selectedUsers === `recent` ? `active` : ``}`}
                  onClick={console.log(`Recent`)}
                >
                  Last 30 days
                </button>
              </th>
              <th>
                <button
                  className={`alltime ${this.props.selectedUsers === `alltime` ? `active` : ``}`}
                  onClick={console.log(`Alltime`)}
                >
                  All time
                </button>
              </th>
            </tr>
          </thead>
          {!this.props.items
            ? <tbody><tr><td>Loading...</td></tr></tbody>
            : <TableRow {...this.props} />}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUsers: state.userSelectedTime,
    items: state.items,
    itemsHasErrored: state.itemsHasErrored,
    itemsIsLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, userGroup) => dispatch(itemsFetchData(url, userGroup))
  };
};

Table.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  selectedUsers: PropTypes.string
};

Table.defaultProps = {
  items: null,
  selectedUsers: null
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
