import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Posts from './components/Posts';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const PUBLIC_URL = '';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: '',
    }
  }

  setSelected = (selected) => {
    this.setState({ selected: selected });
  }

  render() {
    return (
      <div className="App">

        <BrowserRouter basename={PUBLIC_URL} >
          <Header />
          <NavBar onClickSelect={this.setSelected} selected={this.state.selected}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
