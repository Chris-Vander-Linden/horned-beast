import React from "react";
import './Footer.css';

class Footer extends React.Component {
  render() {
    return <footer>&copy;  {new Date().getFullYear()} Chris Vander Linden</footer>;
  }
}

export default Footer;