import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useGlobalContext } from '../context';

export const WeatherAlertModal = () => {
  const { alertModal, setAlertModal } = useGlobalContext();
  const { message, isOpen } = alertModal;

  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => setAlertModal({ isOpen: false, message: '' })}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Weather Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => setAlertModal({ isOpen: false, message: '' })}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
