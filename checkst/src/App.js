import React, { Component } from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: '',
      bio: 'A software engineer with experience in React.',
      imgSrc: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
      profession: 'dev web',
    },
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { Person, show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={Person.imgSrc} alt='aa'/>
          <h1>{Person.fullName}</h1>
          <button onClick={this.handleShow}>Show Bio</button>
          <button onClick={this.handleHide}> Hide Bio</button>
          {show && <p>{Person.bio}</p>}
        </header>
      </div>
    );
  }
}

export default App;

