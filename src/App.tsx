import React, { Dispatch, SetStateAction } from 'react';
import './App.css';
import List from './components/List';
import ListItem from './components/ListItem/ListItem';

const renderItem = (
  val: object,
  index: number,
  setSelected: Dispatch<SetStateAction<never[]>>,
) => (
  <ListItem key={index} index={index} data={val} setSelected={setSelected} />
);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <List renderItem={renderItem} />
      </header>
    </div>
  );
}

export default App;
