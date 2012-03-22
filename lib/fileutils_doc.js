exports.__doc__ = "NAME\n".yellow
    + "\tfileutils\n"
    + "\n"
    + "MODULE DOCS\n".yellow
    + "\thttps://github.com/coolaj86/node-examples-js/tree/master/fs.extra\n"
    + "\n"
    + "DESCRIPTION\n".yellow
    + "\tvar fs = require('fileutils');\n"
    + "\n"
    + "\tfs.copy\n".red
    + "\t--------\n"
    + "\tCreates an fs.readStream and fs.writeStream and uses util.pump to efficiently copy.\n"
    + "\n"

    + "\tfs.copy('foo.txt', 'bar.txt', function (err) {\n".green
    + "\t  if (err) {\n".green
    + "\t    throw err;\n".green
    + "\t  }\n".green
    + "\n"
    + "\t  console.log(\"Copied 'foo.txt' to 'bar.txt'\");\n".green
    + "\t});\n".green
    + "\n"
    + "\tfs.move\n".red
    + "\t--------\n"
    + "\tAttempts fs.rename, then tries fs.copy/fs.unlink before failing.\n"
    + "\n"

    + "\tfs.move('foo.txt', 'bar.txt', function (err) {\n".green
    + "\t  if (err) {\n".green
    + "\t    throw err;\n".green
    + "\t  }\n".green
    + "\n"
    + "\t  console.log(\"Moved 'foo.txt' to 'bar.txt'\");\n".green
    + "\t});\n".green
    + "\n"
    + "\tfs.touch\n".red
    + "\t--------\n"
    + "\ttouch file\n"
    + "\n"

    + "\tfs.touch('foo.txt', function() {\n".green
    + "\t});\n".green
    ;
