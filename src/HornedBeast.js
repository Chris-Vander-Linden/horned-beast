import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 }
  }

  handleLikeClick = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    console.log(this.props)
    return <div className="beastContainer" key={this.props.id}>
      <h2>{this.props.title}</h2>
      <div className="heartContainer">
        <div className="heart"><div>&#9829;</div><div>{this.state.likes !== 0 && this.state.likes}</div></div>
        <div className="img-container">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="creature-tooltip">{`Click to \u2665 ${this.props.title}!`}</Tooltip>}
          >
            <img onClick={this.handleLikeClick} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
          </OverlayTrigger>
        </div>
      </div>
      <Button className="me-2 mb-2 beastDescription-container" onClick={() => this.props.onClick(this.props.title ,this.state.likes)}>
        Learn about {this.props.title}
      </Button>
    </div>;
  }
}

export default HornedBeast;