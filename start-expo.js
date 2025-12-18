#!/usr/bin/env node

const { spawn } = require('child_process');
const { execSync } = require('child_process');

// Try to increase the file descriptor limit
try {
  // On macOS, we need to use ulimit through shell
  execSync('ulimit -n 65536', { shell: '/bin/bash' });
  console.log('✓ File descriptor limit increased');
} catch (error) {
  console.warn('⚠ Could not set ulimit:', error.message);
}

// Start Expo
console.log('Starting Expo...\n');
const expo = spawn('npx', ['expo', 'start'], {
  stdio: 'inherit',
  shell: true,
});

expo.on('error', (error) => {
  console.error('Error starting Expo:', error);
  process.exit(1);
});

expo.on('exit', (code) => {
  process.exit(code);
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  expo.kill('SIGINT');
});



