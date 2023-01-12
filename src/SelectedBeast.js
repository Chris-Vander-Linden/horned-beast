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
            <Modal.Title>{this.props?.selectedBeast[0]?.title ?? ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props?.selectedBeast[0]?.image_url ?? ''} alt='' /><br />
            {this.props?.selectedBeast[0]?.description ?? ''}<br />
            &#9829; {this.props?.likes ?? ''}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;