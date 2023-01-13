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
      pulse: false
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
  render() {
    console.log(this.state);
    return <>
      <Header onClick={{ handleThemeClick: this.handleThemeClick, handlePulseClick: this.handlePulseClick }} pulse={this.state.pulse} darkTheme={this.state.darkTheme} />
      <Main />
      <Footer />
    </>;
  }
}

export default App;