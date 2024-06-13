const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    exec.exec('echo "Exec"');
    core.notice('Core Notice!');
    github.notice('GitHub Notice!');
}
run();