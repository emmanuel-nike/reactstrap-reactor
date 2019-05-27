import React from 'react';
import { Button } from 'reactstrap';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="em-bg-main text-center text-white">
          <div className="em-header-main">
            <h1>{title}</h1>
            <h3>Our Services are Unbeatable</h3>
            <Button className="em-main-btn">Learn more</Button>
          </div>
          <div className="dark-overlay" />
        </div>
        <div className="container pt-3" />
      </div>
    );
  }
}

export default MainContent;
