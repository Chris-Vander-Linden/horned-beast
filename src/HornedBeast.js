import React from "react";

class HornedBeast extends React.Component {
  constructor(props){
    super(props);

    this.state = {likes: 0}
  }

  handleLikeClick = () => {
    console.log("click");
    this.setState({likes: this.state.likes + 1});
  }

  render() {
      return <div className="beastContainer" key={this.props.id}>
      <h2>{this.props.title}</h2>
      <img onClick={this.handleLikeClick} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
      <p>&#9829; {this.state.likes}</p>
      <p>{this.props.description}</p>
      </div>;
  }
}

export default HornedBeast;