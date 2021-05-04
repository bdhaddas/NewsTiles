import React from 'react';
import './header.css';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import RegisterModal from '../RegisterModal/registermodal';

const HeaderBar = () => {
  return (
    <div className='header-bar'>
      <Navbar color='faded' light>
        <NavbarBrand href='/' className='titletext header-title mr-auto'>
          NewsTiles
        </NavbarBrand>
        <Button color='link'>Sign-In</Button>
        <Button color='primary' className='Register'>
          Register
        </Button>{' '}
        <RegisterModal />
      </Navbar>
    </div>
  );
};

export default HeaderBar;
