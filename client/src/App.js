import React, { Fragment } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
//import LoginBar from './components/LoginBar'
import './App.css';

function App() {
  const serverport = 'http://192.168.1.2:5101';
  return (
    <Fragment>
		<div className="container">
		{/* <LoginBar /> */}
			<InputTodo server={serverport}/>
			<ListTodos server={serverport}/>
		</div>
	</Fragment>
  );
}

export default App
