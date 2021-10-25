#!/usr/bin/env node

console.log("start");

console.log(process.argv.length);

for (const argument of process.argv) {
  console.log(argument);
}

console.log("end");
