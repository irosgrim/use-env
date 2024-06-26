const core = require('@actions/core');
const github = require('@actions/github');

const yaml = require('js-yaml');

try {
  const ref = github.context.ref;
  const branchName = ref.replace('refs/heads/', '');
  const varsInput = core.getInput('variables');
  const environments = yaml.load(varsInput);

  const environment = environments.find(env => env.branch === branchName);
  if (!environment) {
    core.setFailed(`No variables provided for branch: ${branchName}`);
    return;
  }

  Object.keys(environment).forEach(key => {
    if (key !== 'branch') {
      core.setOutput(key, environment[key]);
    }
  });

  console.log(`Setting variables for branch: ${branchName}`);
  console.log(`DONE`);
} catch (error) {
  core.setFailed(`Error processing YAML input: ${error.message}`);
}