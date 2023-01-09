import React from "react";

class HornedBeast extends React.Component {
  // I don't need to do this, since I'm not overriding the constructor.
  constructor(props){
    super(props);

    this.state = {}
  }

  render() {
    return <div className="beastContainer">
    <h2>{this.props.title}</h2>
    <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
    <p>{this.props.description}</p>
    </div>;
  }
}

export default HornedBeast;