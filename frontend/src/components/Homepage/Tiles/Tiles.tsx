import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
const Tiles = () => {
  return (
    <div className='tiles'>
      <Card>
        <CardImg top width='100%' src='/assets/256x186.svg' alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h5'></CardTitle>
          <CardText>
            <small className='text-muted'></small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tiles;
