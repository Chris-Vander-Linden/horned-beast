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
        <div className="heart-container">
          <div className="heart"><div>&#9829;</div><div>{this.state.likes}</div></div>
          <div className="img-container">
            <img onClick={this.handleLikeClick} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
          </div>
        </div>
        <div className="beast-description-container">
        <p className="beast-description">{this.props.description}</p>
        </div>
      </div>;
  }
}

export default HornedBeast;