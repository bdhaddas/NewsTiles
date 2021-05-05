import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const SigninForm = () => {
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
    </Form>
  );
};

export default SigninForm;
