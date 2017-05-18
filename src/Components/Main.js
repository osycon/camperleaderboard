import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Main = () => {
  return (
    <div className="app">
      <Header />
      <Content users={this.props.users} />
      <Footer />
    </div>
  );
};

export default Main;
