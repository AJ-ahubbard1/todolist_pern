import React, { Fragment, useState } from 'react'

const InputTodo = (props) => {
    
	const [description, setDescription] = useState('')
	const { server } = props
    const onSubmitForm = async (e) => {
		try {
			e.preventDefault()
			const body = { description }
			const response = await fetch(`${server}/todos`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			})
		
			window.location = "/"
			console.log(response)
		} catch (err) {
			console.error(err.message)
		}
	}

	return (
		<Fragment>
			<h1 className="text-center mt-5">TODO LIST</h1>	
			<h5 className="text-center mt-1">Using PostgreSQL, Express, React, and NODEJS</h5>
			<form className="d-flex mt-5" onSubmit={onSubmitForm}>
				<input 
					type="text" 
					className="form-control"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button className="btn btn-success">Add</button>
			</form>
		</Fragment>
	)
}

export default InputTodo
