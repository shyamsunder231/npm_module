const path=require( 'path' )

let ext=path.extname('D:\nodeJS certification\_Node Module System\hello.txt')

console.log(ext)

let baseName=path.basename('D:\\nodeJS certification\\_Node Module System\\hello.txt')

console.log(baseName);

console.log(__filename)

console.log(__dirname)