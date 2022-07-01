import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationContainer from './components/LocationContainer';
import SearchBox from './components/SearchBox';

function App() {
  const [value, setValue] = useState("1")


  return (
    <div className="App">
      <SearchBox value={value} setValue={setValue} />
      <LocationContainer searchTerm={value}  />
    </div>
  );
}

export default App;
