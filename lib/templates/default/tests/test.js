var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given using {name}',function(){
	it("should be able to load as a Scarlet plugin",function(){
		var loadedPlugin = true;

		try{
			
			var scarlet = new Scarlet("../lib/{name}.js");
			var {instanceName} = scarlet.plugins.{pluginName};

		}catch(exception){
			loadedPlugin = false;
		}

		assert(loadedPlugin,"Plugin wasn't loaded properly and throw an exception");
	});
});
