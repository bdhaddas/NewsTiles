import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';
// import { env.svg } from '../components/icons';

const Body = () => {
  return (
    <CardDeck>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to additional content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This card has even longer content than the first to show that equal
                  height action.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to additional content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
              <CardBody>
                <CardTitle tag='h5'>Card title</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This card has even longer content than the first to show that equal
                  height action.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </CardDeck>
  );
};

export default Body;
