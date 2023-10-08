import React from 'react';
import { Dna } from 'react-loader-spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './App.css';

function App() {
  return (
    <>
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper d-xxl-none"
      />
      <Form.Control className="col-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <Button variant="outline-danger">Reset</Button>
    </>
  );
}

export default App;


