exports.name = prompt('name', package.name || basename);
exports.license = prompt('license', "MIT");
exports.version = prompt('version', package.version || '0.0.0');
exports.description = prompt('description', "Awesome Scarlet Plugin");
exports.author = prompt('author', "");

if(package.repository){
	if(package.repository.url)
		exports.homepage =prompt('homepage',package.repository.url);
}

package.peerDependencies = {
    "scarlet" : config.get('scarletVersion')
}

package.devDependencies = {
	"mocha": "*",
    "grunt": "~0.4.1",
    "grunt-contrib-jshint": "~0.4.3",
    "grunt-contrib-watch": "~0.4.0",
    "grunt-release": "~0.3.3",
    "scarlet" : config.get('scarletVersion')
};

package.directories = {
    "test": "tests",
    "lib": "lib"
};

package.scripts ={
	test : "mocha --reporter spec tests/*"
};

package.keywords = [
    "scarlet-plugin",
    "plugin",
    "scarlet"
];