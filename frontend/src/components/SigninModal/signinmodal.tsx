import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SigninForm from './signinform';
import './signinmodal.css';
import '../Homepage/Header/header.css';

const SigninModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='link' i onClick={toggle}>
        Sign-in
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h1 className='signin-modal-title'>Welcome Back</h1>
        </ModalHeader>
        <ModalBody>
          <SigninForm />
        </ModalBody>
        <ModalFooter>
          <Button className='Register' color='primary' onClick={toggle}>
            Sign-in
          </Button>
          <Button color='link' onClick={toggle}>
            Dont have an account? Register
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SigninModal;
