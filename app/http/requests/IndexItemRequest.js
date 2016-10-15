import Request from '../../kernel/Request.js';

export default class IndexItemRequest extends Request{
	// authorize(){
	// 	return true;
	// }

	rules(){
		return {
			macarena: { type: 'string', exactLength: 6 }
		};
	}

	messages(){
		return {
			macarena: {
				type: 'The field `macarena` must be a text.',
				exactLength: 'The field `macarena` must have an exact length of 6.'
			}
		}
	}
}
