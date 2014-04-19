// var fs = require('fs');
// var assert = require('assert');
// var rimraf = require('rimraf');
// var testDirectory = 'tests/bin/temp/';
// var testFixture = require('./testFixture');

// describe('Given we are using scarlet-init',function() {
// 	this.timeout(5000);
// 	if(fs.existsSync(testDirectory))
// 		rimraf.sync(testDirectory);

// 	fs.mkdirSync(testDirectory);

// 	after(function(){
// 		if(fs.existsSync(testDirectory))
// 			rimraf.sync(testDirectory);
// 	});

// 	describe('Given we are using the default template',function() {
// 		it('Should match expected files', function(done){
// 			testFixture('','default',done);
// 		});
// 	});

// 	describe('Given we are using the grunt-mocha template',function() {
// 		it('Should match expected files', function(done){
// 			testFixture('-t grunt-mocha','grunt-mocha',done);
// 		});
// 	});

// 	describe('Given we are using the full template',function() {
// 		it('Should match expected files', function(done){
// 			testFixture('-t full','full',done);
// 		});
// 	});

// 	describe('Given we are using the full template',function() {
// 		it('Should match expected files', function(done){
// 			testFixture('-t lite','lite',done);
// 		});
// 	});
// });