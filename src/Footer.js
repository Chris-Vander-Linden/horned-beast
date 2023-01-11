import React from "react";

class Footer extends React.Component {
  
  render() {
    return <footer>&copy;  {new Date().getFullYear()} Chris Vander Linden</footer>;
  }
}

export default Footer;