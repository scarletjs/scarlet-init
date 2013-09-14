var assert = require("assert");

var grunt-mocha = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.grunt-mocha = self;
		return self;
	};
	
};