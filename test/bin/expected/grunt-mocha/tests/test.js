var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given using grunt-mocha as a Scarlet plugin',function(){
	it("Should be able to load plugin through Scarlet",function(){
		var loadedPlugin = true;

		try{ 
			var scarlet = new Scarlet("../lib");
			var grunt-mocha = scarlet.plugins.grunt-mocha;

		}catch(exception){
			loadedPlugin = false;
		}

		assert(loadedPlugin,"Plugin wasn't loaded properly and throw an exception");
	});
});