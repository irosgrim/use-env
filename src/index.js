const {getMultilineInput, setFailed, setOutput} = require("@actions/core");

async function run() {
    const envs = getMultilineInput("envs");
    try {
        if (!envs) {
            throw new Error("No envs specified");
        }
        console.log({envs});
        
        const env = JSON.parse(envs);
        console.log(env);

        setOutput("some-env", "value-xxxx");
        
    } catch (error) {
        setFailed(`Couldn't do much: ${error}`);
    }
}

run();