var assert = require("assert");

var default = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.default = self;
		return self;
	};
	
};