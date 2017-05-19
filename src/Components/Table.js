import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import api from '../utils/api';
import TableRow from './TableRow';

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   users: null,
  //   //   selectedUsers: null
  //   // };
  //   // this.getRecent = this.getRecent.bind(this);
  //   // this.getAllTimeHigh = this.getAllTimeHigh.bind(this);
  // }
  componentDidMount() {
    this.props.fetchData(
      `https://fcctop100.herokuapp.com/api/fccusers/top/recent`,
      `recent`
    );
    console.log(`in table`, this.props);
  }
  // getRecent() {
  //   api.getLast30Days().then(users => {
  //     this.setState({
  //       users,
  //       selectedUsers: `recent`
  //     });
  //   });
  // }
  // getAllTimeHigh() {
  //   api.getAllTime().then(users => {
  //     this.setState({
  //       users,
  //       selectedUsers: `alltime`
  //     });
  //   });
  // }
  render() {
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
                  onClick={this.props.fetchData(
                    `https://fcctop100.herokuapp.com/api/fccusers/top/recent`,
                    `recent`
                  )}
                >
                  Last 30 days
                </button>
              </th>
              <th>
                <button
                  className={`alltime ${this.props.selectedUsers === `alltime` ? `active` : ``}`}
                  onClick={this.props.fetchData(
                    `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`,
                    `alltime`
                  )}
                >
                  All time
                </button>
              </th>
            </tr>
          </thead>
          {/* {this.props}
          {!this.props.items
            ? <tbody><tr><td>Loading...</td></tr></tbody>
            : <TableRow {...this.props} />}*/}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  fetchData: PropTypes.func.isRequired,
  // items: PropTypes.arrayOf(PropTypes.object),
  selectedUsers: PropTypes.string
};
Table.defaultProps = {
  items: null,
  selectedUsers: null
};

export default Table;
