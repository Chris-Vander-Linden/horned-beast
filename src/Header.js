import React from "react";
import { ToggleOn, ToggleOff, HeartPulse, HeartPulseFill } from 'react-bootstrap-icons';
import './Header.css';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <header>
        <h1>Horned Beast</h1>
        <div id="headerInnerContainer">
          {this.props.pulse ? <HeartPulseFill width="32" height="32" onClick={() => {this.props.onClick.handlePulseClick()}}/> :
          <HeartPulse width="32" height="32" onClick={() => { this.props.onClick.handlePulseClick() }} />}
          
          {!this.props.darkTheme ? <ToggleOn width="40" height="40" onClick={() => {this.props.onClick.handleThemeClick()}} /> : 
          <ToggleOff width="40" height="40" onClick={() => { this.props.onClick.handleThemeClick() }} />}
        </div>
      </header>
    );
  }
}

export default Header;