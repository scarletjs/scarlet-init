var fs = require('fs');
var dir = require('node-dir');
var assert = require('assert');
var rimraf = require('rimraf');
var through = require('through');
var exec = require('child_process').exec;

var testDirectory = 'tests/bin/temp/';
var COMMAND = '../../../../bin/scarlet-init';

var testFixture = module.exports = exports= function(commandOptions, templateName, onTested){

	var expectedDirectory = 'tests/bin/expected/'+templateName+'/';
	var testTemplateDirectory = testDirectory+templateName+'/';

	if(fs.existsSync(testTemplateDirectory))
		rimraf.sync(testTemplateDirectory);

	fs.mkdirSync(testTemplateDirectory);

	var execCommand = exec(COMMAND+" "+commandOptions,{cwd:testTemplateDirectory},function(error,stdout,stderr){
		dir.files(testTemplateDirectory, function(err, files) {
			if (err) throw err;

			for (var i = 0; i < files.length; i++) {
				var actualFilePath = files[i];
				var expectedFilePath = files[i].replace(testTemplateDirectory,expectedDirectory);

				var actualFileContents = fs.readFileSync(actualFilePath,{encoding:'utf8'});
				var expectedFileContents = fs.readFileSync(expectedFilePath,{encoding:'utf8'});				
				assert(actualFileContents===expectedFileContents);
			}
			if(onTested)
				onTested();
		});
	});

	execCommand.stdout.pipe(through(function(data){
		console.log(data);
		process.nextTick(function(){
			execCommand.stdin.write('\n');
		});
		process.nextTick(function(){
			execCommand.stdin.write('\n');
		});
	}));
};
