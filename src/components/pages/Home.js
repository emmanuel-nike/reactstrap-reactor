import React from 'react';
import MainContent from './MainContent';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainContent title="React|or" />
      </div>
    );
  }
}

export default Home;
