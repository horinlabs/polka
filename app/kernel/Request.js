import Inspector from 'data-inspector';

export default class Request {
	constructor(req) {
		if(!this.authorize()){
			throw new Error('Not authorized');
		}

		const rules = this.rules();
		const messages = this.messages();

		let result = {};

		if(rules){
			const errors = Inspector.verify(req.params, rules, messages);

			if(errors.length){
				console.log(errors);
			}
		}
	}

	authorize(){
		return true;
	}

	rules(){
		return [];
	}

	messages(){
		return [];
	}
};
