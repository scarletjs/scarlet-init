var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given using full as a Scarlet plugin',function(){
	it("Should be able to load plugin through Scarlet",function(){
		var loadedPlugin = true;

		try{ 
			var scarlet = new Scarlet("../lib");
			var full = scarlet.plugins.full;

		}catch(exception){
			loadedPlugin = false;
		}

		assert(loadedPlugin,"Plugin wasn't loaded properly and throw an exception");
	});
});