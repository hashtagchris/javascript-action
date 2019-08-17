import * as core from '@actions/core';

async function run() {
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    core.warning(`I'm warning you!`);
    core.error(`To err is human`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
