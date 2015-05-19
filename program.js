// CHALLENGE 4: My First Async I/O!
var fs = require('fs');
//the 1st two args returned are always 'node' then the home path so start 
//at argv[2]
var file = process.argv[2];

//readFile() is the asynchronous Node way to read file buffers
fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});

/*
// CHALLENGE 3: Reads from a file and counts the newlines in it

//include the fs (filesystem) library into a variable named fs
var fs = require('fs');

//the 1st two args returned are always 'node' then the home path so start 
//at argv[2]
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/


/*// CHALLENGE 2: Passing arguments from the console through process.argv

var argv = process.argv;
var sum = 0;

for (var i = 2; i < argv.length; ++i) {
	sum += Number(argv[i]);
}

console.log(sum);
*/
