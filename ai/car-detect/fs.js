const fs = require('fs');

// fs.readFile('./text.txt',function(err,data){
//     // console.log(err);
//     if(err){
//         throw new Error(err)
//         return;
//     }
//     console.log(data.toString())
// })

fs.readFile('./t5.jpg',function(err,data){
    // console.log(err);
    if(err){
        throw new Error(err)
        return;
    }
    console.log(data)
})