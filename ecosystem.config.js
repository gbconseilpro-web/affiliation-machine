module.exports = {
  apps: [
    {
      name: 'affiliation',
      script: 'node',
      args: '.next/standalone/server.js',
      cwd: '/tmp/affiliation-machine',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
      },
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
};
