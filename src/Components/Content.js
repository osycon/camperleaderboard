import React from 'react';
import Table from './Table';

const Content = props => {
  console.log(`In Content`, props);
  return (
    <div>
      <Table {...this.props} />
    </div>
  );
};

export default Content;
