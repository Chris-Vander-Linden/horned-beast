import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import hornedBeastsData from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornedBeastsData,
      menu: true,
      pulse: true,
      beastFilter: '',
      horns: '',
      sortAlphaDown: '',
      sortNumbersDown: ''
    }
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.setState({
      beastFilter: event.target.value
    });
  }

  handleSelectChange = (event) => {
    event.preventDefault();
    this.setState({
      horns: event.target.value
    });
  }

  handleMenuClick = () => {
    this.setState({
      menu: !this.state.menu
    });
  }

  handlePulseClick = () => {
    this.setState({
      pulse: !this.state.pulse
    });
  }

  handleClick = (event) => {
    const name = event.target.name;
    const value = this.state[name] === '' ? true : !this.state[name];

    this.setState({
      [name]: value
    });
  }

  render() {  
    return <>
      <Header onClick={this.handleClick} eventHandlers={{
        handleMenuClick: this.handleMenuClick, handlePulseClick: this.handlePulseClick,
        onKeyUp: this.handleSearchChange, handleSelectChange: this.handleSelectChange
      }} pulse={this.state.pulse} menu={this.state.menu} hornedBeastsData={this.state.hornedBeastsData} sortAlphaDown={this.state.sortAlphaDown} sortNumbersDown={this.state.sortNumbersDown}/>

      <Main pulse={this.state.pulse} beastFilter={this.state.beastFilter} menu={this.state.menu} horns={this.state.horns} hornedBeastsData={this.state.hornedBeastsData} sortAlphaDown={this.state.sortAlphaDown} sortNumbersDown={this.state.sortNumbersDown} />

      <Footer />
    </>;
  }
}

export default App;