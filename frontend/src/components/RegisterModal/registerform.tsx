import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label for='registerEmail' />
        <Input type='email' name='email' id='registerEmail' placeholder='Email' />
      </FormGroup>
      <FormGroup>
        <Label for='registerPassword' />
        <Input type='password' name='password' id='registerPassword' placeholder='Password' />
      </FormGroup>
      <FormGroup>
        <Label for='confRegisterPassword' />
        <Input
          type='password'
          name='password'
          id='confRegisterPassword'
          placeholder='Confirm Password'
        />
      </FormGroup>
    </Form>
  );
};

export default RegisterForm;
