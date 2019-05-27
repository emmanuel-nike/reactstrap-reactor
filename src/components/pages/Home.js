import React from 'react';
import MainContent from '../sections/MainContent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainContent title="React|OR" />
      </div>
    );
  }
}

export default Home;
