import React from 'react';
import { Button } from 'reactstrap';
import MainNav from './MainNav';

function MyApp() {
  return (
    <div>
      <MainNav />
      <div className="em-bg-main text-center text-white">
        <div className="em-header-main">
          <h1>COMM-APP</h1>
          <h3>Our Services are Unbeatable</h3>
          <Button>Learn more</Button>
        </div>
        <div className="dark-overlay" />
      </div>
      <div className="container pt-3" />
    </div>
  );
}

export default MyApp;
