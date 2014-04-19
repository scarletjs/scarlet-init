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
    "gulp": "~3.6.1",
    "gulp-mocha": "~0.4.1",
    "gulp-jshint": "~1.5.3",
    "scarlet" : config.get('scarletVersion')
};

package.directories = {
    "test": "test",
    "lib": "lib"
};

package.scripts ={
	test : "mocha --reporter spec"
};

package.keywords = [
    "scarlet-plugin",
    "plugin",
    "scarlet"
];

package.engines = {
    "node": ">= 0.10.0"
};