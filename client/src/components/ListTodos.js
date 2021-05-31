import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'

const ListTodos = (props) => {
	const [todos, setTodos] = useState([])
    const { server } = props
	const getTodos = async () => {
		try {
			const response = await fetch(`${server}/todos`)
			const jsonData = await response.json()
			setTodos(jsonData)
		} catch (err) {console.error(err.message)}
	}	

	useEffect(() => { 
		getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	const deleteTodo = async id => {
		try {
			const deletedTodo = await fetch(`${server}/todos/${id}`, {
				method: "DELETE"
			})
			console.log(deletedTodo)
			setTodos(todos.filter(todo => todo.todo_id !== id))
		} catch (err) {console.error(err.message)}
	}

	return ( 
		<Fragment>
			<table className="table table-bordered table-hover mt-5 text-center">
			<thead>
				<tr>
					<th>Description</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{todos.map(todo => (
					<tr key={todo.todo_id}>
						<td>{todo.description}</td>
						<td><EditTodo todo={todo} server={server}/></td>
						<td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
					</tr>)
				)}
			</tbody>
			</table>
		</Fragment>
	)
}

export default ListTodos
