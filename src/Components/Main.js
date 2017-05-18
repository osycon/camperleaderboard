import React from 'react';
import Header from './Header';
import Table from './Table';
// import Content from './Content';
import Footer from './Footer';

const Main = props => {
  console.log(`In Main`, props);
  return (
    <div className="app">
      <Header />
      <Table {...props} />
      <Footer />
    </div>
  );
};

export default Main;
