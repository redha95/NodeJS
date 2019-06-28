import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoProvider from './context/TodoProvider';
import TodoList from './components/Todo/TodoList';
import TodoForm from './components/Todo/TodoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     <TodoProvider>
       <TodoForm></TodoForm>
       <TodoList></TodoList>
     </TodoProvider>
      
    </div>
  );
}

export default App;
