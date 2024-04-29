const core = require('@actions/core');

try {
  const branchName = core.getInput('branch');
  const envsInput = core.getInput('envs');
  const environments = JSON.parse(envsInput);

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

  console.log(`Setting variables for BRANCH: ${branchName}`);
  console.log(`DONE`);

} catch (error) {
  core.setFailed(`Failed to process input or perform action: ${error.message}`);
}
