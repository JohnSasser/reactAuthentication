import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import LoginButton from '../LoginButton';

const ContainerComponent = props => {
  return (
    <Container
      fluid
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#303030',
        textAlign: 'center',
      }}
    >
      <Row>
        <h1 style={{ color: 'white', marginTop: '2em' }}>
          Auth0 user authentication demo
        </h1>

        <Card
          style={{
            marginTop: '12.5vh',
            height: '250px',
            width: '500px',
            backgroundColor: '#1F1F1F',
            padding: '2em 5em',
          }}
        >
          <LoginButton />
        </Card>
      </Row>
    </Container>
  );
};

export default ContainerComponent;
