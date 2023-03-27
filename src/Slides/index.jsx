import React from 'react';
import Title from './Title';
import Compilation from './Compilation';
import Libraries from './Libraries';
import IntMain from './IntMain';
import IOstream from './IOstream';

export default function Slides() {
  return (
    <>
      <Title />
      <Compilation />
      <Libraries />
      <IntMain />
      <IOstream />
    </>
  );
}