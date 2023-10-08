import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './App.css';

function App() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="col-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
  );
}

export default App;


