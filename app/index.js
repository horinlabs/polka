import Router from './kernel/Router';
import routes from './http/routes';
import config from './config';
import restify from 'restify';

const server = restify.createServer(config.server);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

routes(new Router(server));

server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
});
