module.exports = {
	api: {
		port: process.env.API_PORT || 5005,
	},
	jwt: {
		secret: process.env.JWT_SECRET || 'notasecret!',
	},
	mysql: {
		host: process.env.MYSQL_HOST || 'localhost',
		user: process.env.MYSQL_USER || 'root',
		password: process.env.MYSQL_PASS || 'Erikh22l18$#',
		database: process.env.MYSQL_DB || 'test',
	},
	db: {
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 5006,
	},
	post: {
		port: process.env.POST_PORT || 5007,
	},
}