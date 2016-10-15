export default (router) => {
	// router.get('/', 'HomeController');
	router.resource('item', 'ItemController');
};
