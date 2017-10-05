'use strict';

var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/nodebb-cn');
};

Controllers.SendMsg = function (req, res, next) {
     
};
Controllers.renderMobilePage = function(req,res,next) {
	
}
module.exports = Controllers;