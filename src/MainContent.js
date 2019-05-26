import React from 'react';
import { Button } from 'reactstrap';

function MainContent() {
  return (
    <div>
      <div className="em-bg-main text-center text-white">
        <div className="em-header-main">
          <h1>REACT|OR</h1>
          <h3>Our Services are Unbeatable</h3>
          <Button className="em-main-btn">Learn more</Button>
        </div>
        <div className="dark-overlay" />
      </div>
      <div className="container pt-3" />
    </div>
  );
}

export default MainContent;
