import React, { Component } from 'react';
import api from '../utils/api';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      selectedUsers: null
    };
    this.getRecent = this.getRecent.bind(this);
    this.getAllTimeHigh = this.getAllTimeHigh.bind(this);
  }
  componentDidMount() {
    this.getRecent();
  }
  getRecent() {
    api.getLast30Days().then(users => {
      this.setState({
        users,
        selectedUsers: `recent`
      });
    });
  }
  getAllTimeHigh() {
    api.getAllTime().then(users => {
      this.setState({
        users,
        selectedUsers: `alltime`
      });
    });
  }
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
                  className={`recent ${this.state.selectedUsers === `recent` ? `active` : ``}`}
                  onClick={this.getRecent}
                >
                  Last 30 days
                </button>
              </th>
              <th>
                <button
                  className={`alltime ${this.state.selectedUsers === `alltime` ? `active` : ``}`}
                  onClick={this.getAllTimeHigh}
                >
                  All time
                </button>
              </th>
            </tr>
          </thead>

          {!this.state.users
            ? <tbody><tr><td>Loading...</td></tr></tbody>
            : <TableRow users={this.state.users} />}
        </table>
      </div>
    );
  }
}

export default Table;
