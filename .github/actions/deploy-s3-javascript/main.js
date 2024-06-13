const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
    const url = 'https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/reusing-workflows';
    core.setOutput('url', url);
}
run();