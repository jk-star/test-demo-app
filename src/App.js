import './App.css';
import React, { useRef } from 'react';
import Hello from './component/Hello';
import InputForm from './component/InputForm';

function App() {
  let name = 'Jyoti';
  return (
    <>
      <Hello name={name} />
      <InputForm/>
    </>
  );
}

export default App;
