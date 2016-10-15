import config from './config';
import Sequelize from 'sequelize';

export default class Model {
	constructor() {
		if(config.database){
			const {
				name,
				username,
				password,
				host,
				dialect,
				pool,
				storage
			} = config.database;

			this.sequelize = new Sequelize(name, username, password, {
				host,
				dialect,
				pool,
				storage
			});
		}
	}
}
