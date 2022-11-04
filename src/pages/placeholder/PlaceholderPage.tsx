import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
// import { UsernameContext } from '../../context/UsernameContext';

const PlaceholderPage: React.FunctionComponent = () => {
  // const usernameContext = useContext(UsernameContext);
  // console.log(usernameContext.username);

  // return <h1>Hello, {usernameContext?.username}!</h1>;

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ height: '90vh' }}
    >
      <h1>Signed in!</h1>
    </Container>
  );
};

export default PlaceholderPage;
