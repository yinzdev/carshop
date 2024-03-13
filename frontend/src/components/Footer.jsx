// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <row>
          <Col className="text-center py-3">
            <p>CarShop &copy; {currentYear}</p>
          </Col>
        </row>
      </Container>
    </footer>
  );
};

export default Footer;
