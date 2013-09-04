var fs = require('fs');
var path = require('path');
var dir = require('node-dir');
var mkdirp = require('mkdirp');
var replaceStream = require('replacestream');

function ScarletInit () {
	var self = this;

	self.writeTemplate = function(newPackage, tempateName){

		var templateDirectory = __dirname+"/templates/"+tempateName+"/";
		dir.paths(templateDirectory, function(err, paths) {
			if (err) throw err;

			self.createTemplateDirectories(templateDirectory,paths.dirs);
			self.createTemplateFiles(templateDirectory,paths.files, newPackage);

		});
	};

	self.createTemplateDirectories = function(templateDirectory, dirs){
		for (var i = 0; i < dirs.length; i++) {
			var newdir = dirs[i].replace(templateDirectory,"./");
			mkdirp.sync(newdir);
		}
	};

	self.createTemplateFiles = function(templateDirectory, files, newPackage){
		for (var i = 0; i < files.length; i++) {
			var writePath = files[i].replace(templateDirectory,"./");

			var readableStream = fs.createReadStream(files[i]);
			var writeStream = fs.createWriteStream(writePath);
			self.writeTemplateVariables(newPackage, readableStream, writeStream);
		}
	};

	self.writeTemplateVariables = function(newPackage, readStream, writeStream){
		readStream.pipe(replaceStream('{name}', newPackage.name))
					.pipe(replaceStream('{description}', newPackage.description))
					.pipe(replaceStream('{scarletVersion}', newPackage.peerDependencies.scarlet))
					.pipe(replaceStream('{pluginName}', newPackage.name.replace(/scarlet-/i,"").replace(/scarlet/i,"")))
					.pipe(replaceStream('{instanceName}',newPackage.name.charAt(0).toLowerCase()+newPackage.name.slice(1)))
					.pipe(writeStream);
	};
}

module.exports = new ScarletInit();