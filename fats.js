//kernel
var fats = module.exports = require('fats-kernel');

fats.config.extend({
	a: "test a"
});

//exports cli object
fats.cli = {};

fats.cli.name = 'fats';

//commander object
fats.cli.commander = null;

//package.json
fats.cli.info = fats.util.readJSON(__dirname + '/package.json');

//output version info
fats.cli.version = function(){
	console.log('v' + fats.cli.info.version);
};

//output help info
fats.cli.help = function () {
	var content = [
		'',
		'  Usage: ' + fats.cli.name + ' <command>',
		'',
		'  Commands:',
		''
	];

	fats.cli.help.commands.forEach(function (name) {
		content.push('    ' + name);
	});

	content = content.concat([
		'',
		'  Options:',
		'',
		'    -h, --help     output usage information',
		'    -v, --version  output the version number',
		''
	]);
	console.log(content.join('\n'));
};

fats.cli.help.commands = [ 'init', 'server', 'release' ];

fats.cli.run = function (argv) {
	var first = argv[2];
	if (argv.length < 3 || first === '-h' || first === '--help') {
		fats.cli.help();
	} else if (first === '-v' || first === '--version') {
		fats.cli.version();
	} else if (first[0] === '-') {
		fats.cli.help();
	} else {
		//register command
		var commander = fats.cli.commander = require('commander');
		var cmd = fats.require('command', argv[2]);
		cmd.register(
			commander
				.command(cmd.name || first)
				.usage(cmd.usage)
				.description(cmd.desc)
		);
		commander.parse(argv);
	}
};