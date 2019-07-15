import React from 'react';
import './App.scss';
import '@mdsol/sandman/assets/platform.css';
import DocHeader from './layout/GenericCheckmate';
import BasicForm from './Components/basicForm'

function App() {
  return (
    <div>
      <DocHeader/>
      <div>
        <BasicForm />
      </div>
    </div>
  );
}

export default App;
