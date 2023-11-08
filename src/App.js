import React from 'react';
import './App.css';
import MyDate from './components/MyDate';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='todo-app'>
      <MyDate />
      <ToDoList />
      <Footer />
    </div>
    </>
  );
}

export default App;
