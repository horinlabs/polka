module.exports = {
	server: {
		name: 'myapp',
		version: '1.0.0'
	},
	database: {
		host: 'localhost',
		name: '',
		username: '',
		password: '',
		dialect: 'mysql',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
		// SQLite only
		storage: 'path/to/database.sqlite'
	}
}
