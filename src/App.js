import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkTheme: true,
      pulse: true,
      beastFilter: ''
    }
  }

  // functions to be passed to Header
  handleThemeClick = () => {
    console.log("Theme");
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  }

  handlePulseClick = () => {
    console.log("pulse");
    this.setState({
      pulse: !this.state.pulse
    });
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      beastFilter: event.target.value
    });



  }

  render() {
    return <>
      <Header eventHandlers={{
        handleThemeClick: this.handleThemeClick, handlePulseClick: this.handlePulseClick,
        onKeyUp: this.handleSearchChange
      }} pulse={this.state.pulse} darkTheme={this.state.darkTheme} />
      <Main pulse={this.state.pulse} beastFilter={this.state.beastFilter} />
      <Footer />
    </>;
  }
}

export default App;