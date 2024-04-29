const core = require('@actions/core');

try {
  const envsInput = core.getInput('envs');
  const environments = JSON.parse(envsInput);

  environments.forEach(env => {
    console.log(`Branch: ${env.branch}`);
    Object.keys(env).forEach(key => {
      if (key !== 'branch') {
        console.log(`  ${key}: ${env[key]}`);
      }
    });
  });

} catch (error) {
  core.setFailed(`Failed to parse input or perform action: ${error.message}`);
}
