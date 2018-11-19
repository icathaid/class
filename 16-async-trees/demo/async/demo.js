'use strict';

const util = require('util');
const fs = require('fs');
const fsp = util.promisify(fs.readFile);

function pread() {
  return fsp('./stuff.txt');
}

async function aread() {
  const contents = await(pread());
  console.log(contents.toString()); // Cannot return, this is a full offload
}

pread()
  .then(contents => console.log(contents.toString()))
  .catch(console.error);

aread();

