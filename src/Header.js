import React from "react";
//import { ToggleOn, ToggleOff } from 'react-bootstrap-icons';
import { HeartPulse, HeartPulseFill } from 'react-bootstrap-icons';
import './Header.css';

class Header extends React.Component {
  render() {
    const Pulse = this.props.pulse ? HeartPulse : HeartPulseFill;
    //const Toggle = !this.props.darkTheme ? ToggleOn : ToggleOff;
    return (
      <header>
        <div id="headerOuterContainer">
          <h1>Horned Beast</h1>
          <div id="headerInnerContainer">
            {/* Search Component Start */}
            <label htmlFor="beastSearch"></label>
            <input id="beastSearch" type="search" name="q" placeholder="Search Horned Beasts..." onKeyUp={this.props.eventHandlers.onKeyUp} />
            {/* Search Component End */}
            <Pulse width="32" height="32" onClick={() => { this.props.eventHandlers.handlePulseClick() }} />
            {/* 
            <Toggle width="40" height="40" onClick={() => { this.props.eventHandlers.handleThemeClick() }} />
            */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;