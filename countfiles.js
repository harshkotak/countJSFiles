var sh = require('shelljs');

function findJSFiles (folderPath) {
  var numberofjsfiles =  sh.exec("find "+folderPath+" -name '*.js'| wc -l",{ silent:true }).stdout;
  return numberofjsfiles;
}

if (process.argv.slice(2)[0])
  var count = findJSFiles(process.argv.slice(2)[0]);
else {
  console.log('There is no folder');
}

console.log(count);
