const core = require('@actions/core');
const yaml = require('js-yaml');

try {
  const branchName = "main" //core.getInput('branch');
  const varsInput = core.getInput('variables');
  const environments = yaml.load(varsInput);

  console.log({varsInput});

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


// const core = require('@actions/core');

// try {
//   const branchName = core.getInput('branch');
//   const envsInput = core.getInput('envs');
//   const environments = JSON.parse(envsInput);

//   const environment = environments.find(env => env.branch === branchName);
//   if (!environment) {
//     core.setFailed(`No variables provided for branch: ${branchName}`);
//     return;
//   }

//   Object.keys(environment).forEach(key => {
//     if (key !== 'branch') {
//       core.setOutput(key, environment[key]);
//     }
//   });

//   console.log(`Setting variables for branch: ${branchName}`);
//   console.log(`DONE`);

// } catch (error) {
//   core.setFailed(`Failed to process input or perform action: ${error.message}`);
// }
