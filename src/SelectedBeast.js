import React from "react";
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <>
        <Modal show={this.props.show} fullscreen='lg-down' onHide={this.props.onClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;