//OS Module

//  const { Module } = require('module')
// const os = require('os')
// const { dirname } = require('path')

// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())


// console.log(__dirname)
// console.log(__filename)

//Path Module

//const {module} = require('module')
// const path = require('path')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))


// const fs = require('fs')

// fs.readFile("demo.txt", 'utf8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// }
// )


// fs.writeFile('example.html', 'utf8', (err)=> {
//     if(err)
//     {console.log(err)}
//     console.log("file inserted sucessfully")
// })

// fs.rename('example.html', 'index.js', (err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("mdified sucessd")
// })


// fs.unlink('index.js', (err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("File deleted sucessfully")
// })

// const http = require('http')

// const Myserver = http.createServer((request, responce)=>{
//     responce.write("Welcme to the server")
//     responce.end()
// })

// Myserver.listen(3000)

// const {addnumber, substractnumber,division,multiplynumber} = require('./Modules')

// console.log(addnumber(10,20))
// console.log(substractnumber(70,20))
// console.log(division(100,20))
// console.log(multiplynumber(5,20))

