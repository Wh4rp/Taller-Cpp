import React from 'react';
import Title from './Title';
import WhyCppForCP from './WhyCppForCP';
import Installation from './Installation';
import HelloWorld from './HelloWorld';
import RunAndCompile from './RunAndCompile';
import IOstream from './IOstream';

export default function Slides() {
  return (
    <>
      <Title />
      <WhyCppForCP />
      <Installation />
      <HelloWorld />
      <RunAndCompile />
      <IOstream />
    </>
  );
}