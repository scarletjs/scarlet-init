var assert = require("assert");

var {name} = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.{pluginName} = self;
		return self;
	};
	
};