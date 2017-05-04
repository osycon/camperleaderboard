import React, { Component } from 'react';
import api from '../utils/api';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
    // this.handle30Days = this.handle30Days.bind(this);
  }
  componentDidMount() {
    api.getAllTime().then(users => users);
    api.getLast30Days().then(users => {
      this.setState({
        users: users.data
      });
    });
  }
  // handleRecent(user) {
  //   console.log(user);
  // }
  render() {
    // console.log(this.state.users);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>Points in past 30 days</th>
              <th>All time points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hey</td>
              <td>Hey</td>
              <td>Hey</td>
              <td>Hey</td>
            </tr>
            <TableRow users={this.state.users} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
