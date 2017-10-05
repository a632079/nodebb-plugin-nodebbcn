"use strict";

var controllers = require('./lib/controllers'),

	plugin = {};

plugin.init = function (params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers,
		hostHelpers = require.main.require('./src/routes/helpers');

	router.get('/admin/plugins/nodebb-cn', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/nodebb-cn', controllers.renderAdminPage);
	router.get('/api/nodebb-cn/mobile/send', controllers.send);
	hostHelpers.setupPageRoute(router, '/user/:userslug/mobile', hostMiddleware, [hostMiddleware.requireUser, hostMiddleware.exposeUid], controllers.renderMobilePage);
	callback();
};

plugin.addAdminNavigation = function (header, callback) {
	header.plugins.push({
		route: '/plugins/nodebb-cn',
		icon: 'fa-tint',
		name: 'NodeBB 中国本地化'
	});

	callback(null, header);
};

plugin.banText = function (params, callback) {

};

plugin.addMobileCaptcha = function (params, callback) {
	//Registration Form
}
plugin.addProfileItem = function (parms, callback) {

}
module.exports = plugin;