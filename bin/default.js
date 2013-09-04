exports.name = prompt('name', package.name || basename);
exports.license = prompt('license', "MIT");
exports.version = prompt('version', package.version || '0.0.0');
exports.description = prompt('description', "Awesome Scarlet Plugin");

if(package.repository){
	if(package.repository.url)
		exports.homepage =prompt('homepage',package.repository.url);
}

package.peerDependencies = {
    "scarlet": "~0.5.11"
};

package.devDependencies = {
	"mocha": "*",
    "should": "*",
    "grunt": "~0.4.1",
    "grunt-contrib-jshint": "~0.4.3",
    "grunt-contrib-watch": "~0.4.0",
    "grunt-release": "~0.3.3",
    "scarlet": "~0.5.11"
};

package.directories = {
    "test": "tests",
    "lib": "lib"
};

package.scripts ={
	tests : "mocha --reporter spec tests/*"
};