const fs=require('fs')

console.log(""+fs.readFileSync('f1.txt'))

fs.writeFileSync('f1.txt','this is not f2.txt')

fs.appendFileSync('f1.txt','but this is f1.txt')

fs.unlinkSync('f1.txt')