import React, { Component } from 'react';
import PublicHeader from '@/components/header/header';
// import Loading from '@/components/common/loading'
import './home.css';

class Home extends Component {
  render() {
    return (
      <main className="home-container">
        <PublicHeader title='首页' record />
      </main>
    );
  }
}

export default Home;
