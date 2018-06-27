process.stdin.setEncoding('utf-8');

function commands() {
  process.stdout.write(
    '\n-----------------------------\n' +
    'Commands:\n' +
    '- commands [show commands list]\n' +
    '- ver [show node version]\n' +
    '- lang [show system language]\n' +
    '- /exit [exit programm]\n' +
    '-----------------------------\n\n');
};

commands();

process.stdin.on('readable', function() {
  var input = process.stdin.read();

  if (input !== null) {
    var instruction = input.toString().trim();

    switch (instruction) {
      case 'commands':
        commands();
        break;
      case 'ver':
        console.log('Node version: ' + process.versions.node + '\n');
        break;
      case 'lang':
        console.log('System language: ' + process.env.lang + '\n');
        break;
      case '/exit':
        console.log('Quitting app!');
        process.exit();
      default:
        console.log('Wrong instruction!' + '\n');
    }
  }
});