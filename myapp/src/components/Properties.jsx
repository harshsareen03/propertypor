import React,{useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

import './style.css'
export default function Properties({ product }) {
  const [showFull, setShowFull] = useState(false);
  const limit = 15; // adjust based on your needs
  const description = showFull ? product.description : `${product.description.substring(0, limit)}...`;
  const title = showFull ? product.title : `${product.title.substring(0, limit)}...`;

  return (
    
    <>
    
      <Card className="mb-5 "border="secondary" >
        <Card.Img variant="top" src={product.image}  height={150} width={600}/>
        <Card.Body>
            
        <Card.Title ><h6> {title}</h6>
        {product.title.length > limit}</Card.Title>
          <Card.Text bg="info">
            {description}
            
          </Card.Text>
          {product.description.length > limit && (
          <Button  onClick={() => setShowFull(!showFull)}>
            {showFull ? 'Read Less' : 'Read More'}
          </Button>
        )}
        
          <p>${product.price}</p>
        </Card.Body>
        
      </Card>
    
  </>
  )
}


  