import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ToggleOn, ToggleOff, HeartPulse, HeartPulseFill } from 'react-bootstrap-icons';
import './Header.css';

class Header extends React.Component {
  render() {
    const Pulse = this.props.pulse ? HeartPulse : HeartPulseFill;
    const Toggle = !this.props.menu ? ToggleOn : ToggleOff;

    return (
      <header>
        <div id="headerOuterContainer">
          <h1><a href="./" >Horned Beast</a></h1>
          <div id="headerInnerContainer">
            <Pulse id="menuHeart" width="32" height="32" onClick={this.props.eventHandlers.handlePulseClick} />
            <Toggle width="40" height="40" onClick={this.props.eventHandlers.handleMenuClick} />
          </div>
        </div>
        <div id="menu" className={this.props.menu ? 'hideMenu' : 'showMenu'}>
          <Form>
            <InputGroup>
              <Form.Control
                placeholder="Search Horned Beasts..."
                aria-label="Search Horned Beasts"
                onKeyUp={this.props.eventHandlers.onKeyUp}
              />

              <Button name="sortAlphaDown" value={this.props.sortAlphaDown} variant="outline-secondary" onClick={this.props.onClick}>{this.props.sortAlphaDown === '' ? 'Sort?' : this.props.sortAlphaDown ? '\u2193' : '\u2191'}</Button>

            </InputGroup>
            <InputGroup>
              <Form.Select aria-label="Number of horns" onChange={this.props.eventHandlers.handleSelectChange}>
                <option value="">Min. # of horns</option>
                { // build unique horn number options for form
                  this.props.hornedBeastsData.map(beast => {
                    // return array of horns
                    return beast.horns;
                  }).filter((beastHornNumber, index, array) => {
                    // return only the first instance of horn number
                    return array.indexOf(beastHornNumber) === index;
                  }).map(horn => {
                    // return html formatted array
                    return <option key={horn} value={horn}> {horn}</option>
                  })
                }
              </Form.Select>

              <Button name="sortNumbersDown" value={this.props.sortNumbersDown} variant="outline-secondary" onClick={this.props.onClick}>{this.props.sortNumbersDown === '' ? 'Sort?' : this.props.sortNumbersDown ? '\u2193' : '\u2191'}</Button>

            </InputGroup>
          </Form>
        </div>
      </header>
    );
  }
}

export default Header;