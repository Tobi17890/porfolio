import { execSync } from 'child_process';
import ip from 'ip';

// Get the local IP address
const ipAddress = ip.address();

// Set environment variables for Nuxt
process.env.NUXT_HOST = '0.0.0.0';  // Listen on all network interfaces
process.env.NUXT_PORT = 9000;

console.log(`Starting Nuxt on http://localhost:9000 and http://${ipAddress}:9000...`);

// Run the Nuxt development server
execSync('npx nuxt dev', { stdio: 'inherit' });
