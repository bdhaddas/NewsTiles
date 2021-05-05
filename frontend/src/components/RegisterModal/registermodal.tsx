import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegisterForm from './registerform';
import './registermodal.css';
import '../Homepage/Header/header.css';

const RegisterModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='Register' color='primary' i onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h1 className='register-modal-title'>Get Setup</h1>
        </ModalHeader>
        <ModalBody>
          <RegisterForm />
        </ModalBody>
        <ModalFooter>
          <Button className='Register' color='primary' onClick={toggle}>
            Register
          </Button>
          <Button color='link' onClick={toggle}>
            Already registered? Sign-in
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RegisterModal;
