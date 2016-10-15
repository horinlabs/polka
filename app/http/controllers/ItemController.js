import IndexItemRequest from '../requests/IndexItemRequest.js';

export default class ItemController {
	constructor(){

	}

	index(req){
		const request = new IndexItemRequest(req);
		const response = {
			...req.params,
			test: true
		};

		return response;
	}

	store(){

	}

	show(){

	}

	update(){

	}

	destroy(){

	}
};
