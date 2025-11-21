// Spawns a new Node.js process to execute a module. 
// This is designed for inter-process communication (IPC).

import { fork } from 'child_process'

const child = fork('./NODE/child_process/spawn.js');

child.on('message', (message) => {
  console.log('Message from child:', message);
});

child.send({ greeting: 'Hello from parent' });

child.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});

child.on('error', (err) => {
  console.error('child encountered an error:', err);
});