import React, { useContext, useRef } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UsernameContext } from '../../context/UsernameContext';
import { Placeholder } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {
  const usernameContext = useContext(UsernameContext);

  return (
    <Container fluid className='p-0'>
      <Row className='m-5'>
        <Col>
          <Image fluid src='https://picsum.photos/800'></Image>
        </Col>
        <Col>
          <Form>
            <h5 className='mb-3'>Register your restaurant today!</h5>
            <Form.Group className='mb-3'>
              <Form.Label>Restaurant name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter restaurant name'
              ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Restaurant address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter restaurant address'
              ></Form.Control>
            </Form.Group>
            <Row>
              <Form.Group as={Col} className='mb-3'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter city'
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} className='mb-3'>
                <Form.Label>State</Form.Label>
                <Form.Control as='select'>
                  <option value='AL'>Alabama</option>
                  <option value='AK'>Alaska</option>
                  <option value='AZ'>Arizona</option>
                  <option value='AR'>Arkansas</option>
                  <option value='CA'>California</option>
                  <option value='CO'>Colorado</option>
                  <option value='CT'>Connecticut</option>
                  <option value='DE'>Delaware</option>
                  <option value='DC'>District Of Columbia</option>
                  <option value='FL'>Florida</option>
                  <option value='GA'>Georgia</option>
                  <option value='HI'>Hawaii</option>
                  <option value='ID'>Idaho</option>
                  <option value='IL'>Illinois</option>
                  <option value='IN'>Indiana</option>
                  <option value='IA'>Iowa</option>
                  <option value='KS'>Kansas</option>
                  <option value='KY'>Kentucky</option>
                  <option value='LA'>Louisiana</option>
                  <option value='ME'>Maine</option>
                  <option value='MD'>Maryland</option>
                  <option value='MA'>Massachusetts</option>
                  <option value='MI'>Michigan</option>
                  <option value='MN'>Minnesota</option>
                  <option value='MS'>Mississippi</option>
                  <option value='MO'>Missouri</option>
                  <option value='MT'>Montana</option>
                  <option value='NE'>Nebraska</option>
                  <option value='NV'>Nevada</option>
                  <option value='NH'>New Hampshire</option>
                  <option value='NJ'>New Jersey</option>
                  <option value='NM'>New Mexico</option>
                  <option value='NY'>New York</option>
                  <option value='NC'>North Carolina</option>
                  <option value='ND'>North Dakota</option>
                  <option value='OH'>Ohio</option>
                  <option value='OK'>Oklahoma</option>
                  <option value='OR'>Oregon</option>
                  <option value='PA'>Pennsylvania</option>
                  <option value='RI'>Rhode Island</option>
                  <option value='SC'>South Carolina</option>
                  <option value='SD'>South Dakota</option>
                  <option value='TN'>Tennessee</option>
                  <option value='TX'>Texas</option>
                  <option value='UT'>Utah</option>
                  <option value='VT'>Vermont</option>
                  <option value='VA'>Virginia</option>
                  <option value='WA'>Washington</option>
                  <option value='WV'>West Virginia</option>
                  <option value='WI'>Wisconsin</option>
                  <option value='WY'>Wyoming</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} className='mb-3'>
                <Form.Label>ZIP code</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter ZIP code'
                ></Form.Control>
              </Form.Group>
            </Row>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <NavLink to={'/placeholder'}>Register</NavLink>
            {/* <Button className='mb-2' variant='primary' type='submit'>
              Register
            </Button> */}
          </Form>
          Already registered? <NavLink to={'/placeholder'}>Sign in.</NavLink>
        </Col>
      </Row>
      <Row className='px-5 m-5'>
        <h3 className='text-center'>86 Mission Statement</h3>
        <p className='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          aliquet velit non nisi faucibus, non volutpat lectus vehicula. Integer
          non justo ac ante sollicitudin venenatis nec quis mauris. In pretium
          suscipit lectus, quis rhoncus arcu vestibulum ut. Etiam viverra, nunc
          fermentum congue tristique, massa ante sollicitudin tortor, interdum
          placerat ante ante sit amet risus. Ut varius urna vitae molestie
        </p>
      </Row>
      <Row className='px-5 m-5'>
        <h3 className='text-center mb-3'>Why 86?</h3>
        <Col>
          <h4 className='text-center'>Lorem ipsum</h4>
          <Image fluid src='https://picsum.photos/500'></Image>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet velit non nisi faucibus, non volutpat lectus vehicula.
            Integer non justo ac ante sollicitudin venenatis nec quis mauris.
          </p>
        </Col>
        <Col>
          <h4 className='text-center'>Lorem ipsum</h4>
          <Image fluid src='https://picsum.photos/501'></Image>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet velit non nisi faucibus, non volutpat lectus vehicula.
            Integer non justo ac ante sollicitudin venenatis nec quis mauris.{' '}
          </p>
        </Col>
        <Col>
          <h4 className='text-center'>Lorem ipsum</h4>
          <Image fluid src='https://picsum.photos/502'></Image>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet velit non nisi faucibus, non volutpat lectus vehicula.
            Integer non justo ac ante sollicitudin venenatis nec quis mauris.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
