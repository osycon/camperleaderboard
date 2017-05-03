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
          <row>Hey</row>
        </table>
      </div>
    );
  }
}

export default Table;
