import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css';
import ig from './footericons/ig.svg';
import twitter from './footericons/twitter.svg';
import fb from './footericons/fb.svg';
import discord from './footericons/discord.svg';

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col>
                <img src={ig} className='App-logo' alt='website logo' />
              </Col>
              <Col>
                <img src={twitter} className='App-logo' alt='website logo' />
              </Col>
              <Col>
                {' '}
                <img src={fb} className='App-logo' alt='website logo' />
              </Col>
              <Col>
                <img src={discord} className='App-logo' alt='website logo' />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
