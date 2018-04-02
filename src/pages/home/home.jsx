import React, { Component } from 'react';
import PublicHeader from '@/components/header/header';
// import Loading from '@/components/common/loading'
import './home.css';
import http from '@/api/fetch';

class Home extends Component {
  componentWillMount() {
    let params = {
      id: "5a73fdc68fb4651dbcd21da2"
    }
    http('/poetyContent', "POST", params).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <main className="home-container">
        <PublicHeader title='首页' record />
      </main>
    );
  }
}

export default Home;
