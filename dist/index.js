"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
async function run() {
    const envs = (0, core_1.getMultilineInput)("envs");
    try {
        if (!envs) {
            throw new Error("No envs specified");
        }
        console.log({ envs });
        (0, core_1.setOutput)("some-env", "value-xxxx");
    }
    catch (error) {
        (0, core_1.setFailed)(`Couldn't do much: ${error}`);
    }
}
run();
