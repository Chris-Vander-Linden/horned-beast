import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Heartbreak, Heart } from 'react-bootstrap-icons';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} fullscreen='lg-down' onHide={this.props.onClick}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props?.selectedBeast[0]?.title ?? ''} = {this.props?.likes !== 0 && this.props.likes + ` x `} {this.props?.likes !== 0 ? <Heart /> : <Heartbreak />}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={"bg-dark text-white"} >
            <img src={this.props?.selectedBeast[0]?.image_url ?? ''} alt='' /><br />
            {`Description: ${this.props?.selectedBeast[0]?.description ?? ''}`}<br />
            {`# of horns: ${this.props?.selectedBeast[0]?.horns ?? ''}`}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;