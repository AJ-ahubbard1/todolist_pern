const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	password: 'password',
	database: 'todo_db',
	host: 'localhost',
	post: 5432
})

module.exports = pool
