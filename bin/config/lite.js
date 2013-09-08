exports.name = prompt('name', package.name || basename);
exports.license = prompt('license', "MIT");
exports.version = prompt('version', package.version || '0.0.0');
exports.description = prompt('description', "Awesome Scarlet Plugin");

if(package.repository){
	if(package.repository.url)
		exports.homepage =prompt('homepage',package.repository.url);
}

package.peerDependencies = {
    "scarlet" : config.get('scarletVersion')
}

package.devDependencies = {
    "scarlet" : config.get('scarletVersion')
};