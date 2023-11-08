import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='todo-app'>
      <ToDoList />
      <Footer />
    </div>
    </>
  );
}

export default App;
