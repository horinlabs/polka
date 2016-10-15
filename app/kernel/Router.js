export default class Router {
	constructor(_server) {
		this.server = _server;
	}

	resource(name, controller, params){
		if(controller){
			const Controller = require(`../http/controllers/${controller}`).default;
			const c = new Controller();

			try {
				c.index && this.server.get(`/${name}`, (req, res, next) => {
					res.send(c.index(req));

					return next();
				});

				c.store && this.server.post(`/${name}`, (req, res, next) => {
					res.send(c.store(req));

					return next();
				});

				c.show && this.server.get(`/${name}/:id`, (req, res, next) => {
					res.send(c.show(req), req.params.id);

					return next();
				});

				c.update && this.server.put(`/${name}/:id`, (req, res, next) => {
					res.send(c.update(req), req.params.id);

					return next();
				});

				c.destroy && this.server.del(`/${name}/:id`, (req, res, next) => {
					res.send(c.destroy(req), req.params.id);

					return next();
				});
			} catch (e) {

			} finally {

			}
		}
	}

	auth(){
		this.server.get(function(){});
		// TODO: built auth
	}

	get(route, handler){
		this.server.get(route, handler);
	}
	//...
};
