var fs = require('fs');
var path = require('path');
var dir = require('node-dir');
var mkdirp = require('mkdirp');

var replaceStream = require('replacestream');

function ScarletInit () {
	var self = this;

	self.writeTemplate = function(newPackage, tempateName){
		// the data's already been written to {dir}/package.json
		// now you can do stuff with it
		console.log(newPackage);

		var templateDirectory = __dirname+"/templates/"+tempateName+"/";
		dir.paths(templateDirectory, function(err, paths) {
		    if (err) throw err;

		    //create missing directories
		    for (var i = 0; i < paths.dirs.length; i++) {
		    	var newdir = paths.dirs[i].replace(templateDirectory,"./");
		    	mkdirp.sync(newdir);
		    };

		    for (var i = 0; i < paths.files.length; i++) {
		    	var writePath = paths.files[i].replace(templateDirectory,"./");

				var readableStream = fs.createReadStream(paths.files[i]);
				var writeStream = fs.createWriteStream(writePath);
				writeTemplateVariables(newPackage, readableStream, writeStream);
		    };
		    //console.log('paths:\n',paths);
		});

		// var readableStream = fs.createReadStream(path.resolve(__dirname+'/templates/'+tempateName+'/'+"README.md"));
		// var writeStream = fs.createWriteStream('./README.md');
		// writeTemplateVariables(newPackage, readableStream, writeStream);


		// fs.mkdir(baseDirectory+'/lib', function(){

		// });

		// fs.mkdir(baseDirectory+'/tests',function(){
			
			
		// });
	};

	var writeTemplateVariables = function(newPackage, readStream, writeStream){
		readStream.pipe(replaceStream('{name}', newPackage.name))
					.pipe(replaceStream('{description}', newPackage.description))
					.pipe(replaceStream('{scarletVersion}', newPackage.peerDependencies.scarlet))
					.pipe(replaceStream('{pluginName}', newPackage.name.replace(/scarlet-/i,"").replace(/scarlet/i,"")))
					.pipe(replaceStream('{instanceName}',newPackage.name.charAt(0).toLowerCase()+newPackage.name.slice(1)))
					.pipe(writeStream);
	};
}

module.exports = new ScarletInit();