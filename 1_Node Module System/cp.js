// used to create  subprocesses within a script
// we can perform different tasks with your script by using some methosds


const cp=require('child_process')

cp.execSync('calc')
cp.execSync('start chrome https://www.netflix.com/browse')

console.log('output '+cp.execSync('node filename'))