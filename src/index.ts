import { getInput, getMultilineInput, setFailed, setOutput} from "@actions/core";

async function run() {
    const envs = getMultilineInput("envs");
    try {
        if (!envs) {
            throw new Error("No envs specified");
        }
        console.log({envs});
        setOutput("some-env", "value-xxxx");
        
    } catch (error) {
        setFailed(`Couldn't do much: ${error}`);
    }
}

run();