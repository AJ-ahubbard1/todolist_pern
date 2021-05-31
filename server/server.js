const express = require('express')
const app = express()
const pool = require('./db');
const cors = require('cors')
const portnum = 5101

//middleware
app.use(cors())
app.use(express.json()) 

// ROUTES
// GET ALL TODOS
app.get('/todos', async(req, res) => {
	try {
		const todos = await pool.query('SELECT * FROM todo')
		console.log('getting all todos', new Date().getTime())
		res.json(todos.rows)
	
	} catch (err) {
		console.error(err.message)
	}
})

// GET A TODO
app.get('/todos/:id', async(req, res) => {
	try {
		const todoId = req.params.id
		const todo = await pool.query('SELECT * FROM todo where todo_id = $1',[todoId])
		console.log('getting a todo')
		res.json(todo.rows)
	
	} catch (err) {
		console.error(err.message)
	}
})

// CREATE A TODO
app.post('/todos', async(req, res) => {
	try {
		const { description } = req.body
		const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *',[description])
		console.log('creating a todo')
		res.json(newTodo.rows)
	
	} catch (err) {
		console.error(err.message)
	}
})
// UPDATE A TODO
app.put('/todos/:id', async(req, res) => {
	try {
		const todoId = req.params.id
		const { description } = req.body
		const todo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',[description,todoId])
		console.log('updating a todo')
		res.json(todo.rows)
	
	} catch (err) {
		console.error(err.message)
	}
})

// DELETE A TODO
app.delete('/todos/:id', async(req, res) => {
	try {
		const todoId = req.params.id
		const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = ($1)',[todoId])
		console.log('deleting a todo')
		res.json('todo successfully deleted')
	
	} catch (err) {
		console.error(err.message)
	}
})


app.listen(portnum, () => {
	console.log(`server is listening on port ${portnum}...`)
})



