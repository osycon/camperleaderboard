import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const last30Days = axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    const allTime = axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    last30Days();
    allTime();
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
