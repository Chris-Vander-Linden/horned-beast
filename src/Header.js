import React from "react";
import { ToggleOn, ToggleOff, HeartPulse, HeartPulseFill } from 'react-bootstrap-icons';
import './Header.css';

class Header extends React.Component {
  render() {
    console.log(this.props);
    const Pulse = this.props.pulse ? HeartPulse : HeartPulseFill;
    const Toggle = !this.props.darkTheme ? ToggleOn : ToggleOff;
    return (
      <header>
        <div id="headerOuterContainer">
          <h1>Horned Beast</h1>
          <div id="headerInnerContainer">
            <Pulse width="32" height="32" onClick={() => { this.props.onClick.handlePulseClick() }} />
            <Toggle width="40" height="40" onClick={() => { this.props.onClick.handleThemeClick() }} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;