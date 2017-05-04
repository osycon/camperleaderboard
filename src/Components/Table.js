import React, { Component } from 'react';
import api from '../utils/api';

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
  // handle30Days() {
  //   //
  // }
  render() {
    console.table(this.state.users);
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
