var assert = require("assert");

var lite = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.lite = self;
		return self;
	};
	
};