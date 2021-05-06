import React from 'react';
import './header.css';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import RegisterModal from '../RegisterModal/registermodal';
import SigninModal from '../SigninModal/signinmodal';

const Header = () => {
  return (
    <div className='header-bar'>
      <Navbar color='faded' light>
        <NavbarBrand href='/' className='titletext header-title mr-auto'>
          NewsTiles
        </NavbarBrand>
        <SigninModal />
        <RegisterModal />
      </Navbar>
    </div>
  );
};

export default Header;
