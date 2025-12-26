// The child_process module in Node.js allows you to create and control child processes,
// enabling you to
// 1. execute system commands,
// 2. run scripts,
// 3. spawn other programs from your Node.js application.
// interact with the underlying operating system or external tools.

import { exec, execFile } from 'child_process'

// spawns a shell and executes the command within that shell.
// Best for simple shell commands that rely on shell features and have small, buffered output.

exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});


// does not spawn a shell by default.
// It executes the specified executable file directly as a new process.

// Best for running binary executables or compiled scripts directly, 
// especially when security is a concern and you don't need shell features.


execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
});





