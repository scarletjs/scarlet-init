var assert = require("assert");

var full = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.full = self;
		return self;
	};
	
};