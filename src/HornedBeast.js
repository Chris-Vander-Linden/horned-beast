import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 }
  }

  handleLikeClick = () => {
    console.log("click");
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
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
      <div className="beastDescription-container">
        <p className="beastDescription">{this.props.description}</p>
      </div>
    </div>;
  }
}

export default HornedBeast;