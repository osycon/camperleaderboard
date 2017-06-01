import React from 'react';
import Header from './Header';
import Table from '../Containers/Table';
import Footer from './Footer';

const App = props => {
  return (
    <div className="app">
      <Header />
      <Table {...props} />
      <Footer />
    </div>
  );
};

export default App;
