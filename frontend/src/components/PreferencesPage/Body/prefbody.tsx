import React from 'react';
import './prefbody.css';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import usercircle from './icons/usercircle.svg';
import business from './icons/business.svg';
import education from './icons/education.svg';
import entertainment from './icons/entertainment.svg';
import environment from './icons/environment.svg';
import finance from './icons/finance.svg';
import health from './icons/health.svg';
import politics from './icons/politics.svg';
import science from './icons/science.svg';
import sports from './icons/sports.svg';
import tech from './icons/tech.svg';
import UK from './icons/UK.svg';
import world from './icons/world.svg';

const PrefBody = () => {
  return (
    <Container className='pref-body'>
      <Card className='pref-card'>
        <CardBody>
          <CardTitle className='pref-card-title' tag='h5'>
            Welcome, Michele
          </CardTitle>
          <br />
          <CardSubtitle tag='h6' className='pref-card-sub-title'>
            User News Preferences
          </CardSubtitle>
        </CardBody>
      </Card>
      <Row xs='3'>
        <Col>
          <img src={business} className='pref-card-img' alt='Business Icon' />
          <p className='pref-card-text'>Business</p>
        </Col>
        <Col>
          <img src={education} className='pref-card-img' alt='Education Icon' />
          <p className='pref-card-text'>Education</p>
        </Col>
        <Col>
          <img src={environment} className='pref-card-img' alt='Environment Icon' />
          <p className='pref-card-text'>Environment</p>
        </Col>
        <Col>
          <img src={finance} className='pref-card-img' alt='Finance Icon' />
          <p className='pref-card-text'>Finance</p>
        </Col>
        <Col>
          <img src={health} className='pref-card-img' alt='Health Icon' />
          <p className='pref-card-text'>Health</p>
        </Col>
        <Col>
          <img src={politics} className='pref-card-img' alt='Politics Icon' />
          <p className='pref-card-text'>Politics</p>
        </Col>
        <Col>
          <img src={science} className='pref-card-img' alt='Science Icon' />
          <p className='pref-card-text'>Science</p>
        </Col>
        <Col>
          <img src={sports} className='pref-card-img' alt='Sports Icon' />
          <p className='pref-card-text'>Sport</p>
        </Col>
        <Col>
          <img src={tech} className='pref-card-img' alt='Tech Icon' />
          <p className='pref-card-text'>Tech</p>
        </Col>
        <Col>
          <img src={UK} className='pref-card-img' alt='UK Icon' />
          <p className='pref-card-text'>UK</p>
        </Col>
        <Col>
          <img src={world} className='pref-card-img' alt='World Icon' />
          <p className='pref-card-text'>World</p>
        </Col>
        <Col>
          <img src={entertainment} className='pref-card-img' alt='Entertainment Icon' />
          <p className='pref-card-text'>Entertainment</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrefBody;

// <Row xs='2' className='pref-header-cont'>
// <Col>
//   <CardTitle className='pref-card-title' tag='h5'>
//     Welcome, Michele
//   </CardTitle>
// </Col>
// <Col xl-4 />
// <Col>
//   <CardSubtitle tag='h6' className='pref-card-sub-title'>
//     User News Preferences
//   </CardSubtitle>
// </Col>
// </Row>
