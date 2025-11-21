// Spawns a new process with the given command and arguments. 
// It streams the output, making it suitable for large outputs.

// If you are dealing with processes that 
// generate a large amount of data or need real-time output,
// the spawn method is preferred as it uses streams.

import { spawn } from 'child_process'

const child = spawn('dir', { shell: true });

child.stdout.on('data', (data) => {
    console.log(`Stdout: ${data}`);
});

child.stderr.on('data', (err) => {
    console.error(`Stderr: ${err}`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});