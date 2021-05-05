import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Col,
} from 'reactstrap';

type NewsTileProps = {
  source: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
};
const NewsTile = ({ source, title, urlToImage, publishedAt }: NewsTileProps) => {
  return (
    <div className='tiles'>
      <Card>
        <CardImg width='0px' src={urlToImage} alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h5'>{title}</CardTitle>
          <CardText>
            <small className='text-muted'>
              {source}
              <br />
              {publishedAt}
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsTile;
