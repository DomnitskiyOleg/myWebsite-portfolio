import React from 'react';
import { Dna } from 'react-loader-spinner';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './App.css';

function App() {
  return (
    <>
      <Stack className="container" direction="horizontal" gap={1} style={{ minHeight: '75%' }}>
        <Collapse in={true} dimension="width" appear={true} timeout={700}>
          <div id="example-collapse-text" className="p-2 col-2 bg-dark" style={{ minHeight: '85%', borderRadius: 3 }}>
            Привет
          </div>
        </Collapse>
        <div className="p-2 col-10 bg-dark" style={{ minHeight: '85%', borderRadius: 3 }}>
        </div>
      </Stack>
    </>
  );
}

export default App;


