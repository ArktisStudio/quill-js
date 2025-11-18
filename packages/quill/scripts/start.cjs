const { execSync } = require('child_process');

const port = 3000;

const cmd = port ? `webpack-dev-server --port ${port}` : `webpack-dev-server`;

execSync(cmd, { stdio: 'inherit' });
