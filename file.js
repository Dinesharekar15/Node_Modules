const fs= require("fs");

const os=require("os");

console.log(os.cpus().length)

fs.writeFileSync("./text.txt","hello i am dinesh ");
fs.writeFile("./contacs.txt","Dinesh:+919325515167",(err)=>{});

console.log("1")
const result=fs.readFileSync("./contacs.txt","utf-8");

console.log(result);
console.log("2")
console.log("1")

fs.readFile("./contacs.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error  ala re baba",err);
    }else{
        console.log(result);
    }
})


console.log("2")


fs.appendFileSync("./contacs.txt",`\nvivek :923424482`);
fs.cpSync('./contacs.txt','./copy.txt')
fs.unlinkSync('./copy.txt');

console.log(fs.statSync('./contacs.txt').isFile())

fs.mkdirSync('my-dir/a/b',{recursive:true})
