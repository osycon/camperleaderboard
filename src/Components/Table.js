import React, { Component } from 'react';
import axios from 'axios';
import api from '../utils/api';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    api.getAllTime().then(users => console.log(users));
    api.getLast30Days().then(users => console.log(users));
  }
  render() {
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
              <td>Hey</td>
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
