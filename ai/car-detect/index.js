// console.log('AI来了，酷！');

//de 引入模块的关键字  require
// 图像识别
const ApiImageClassifyClient=require('baidu-aip-sdk').imageClassify;
//内置模块 fileSystem
const fs = require('fs');

// 1. 读入文件 I/O  从硬盘读入内存中，
const APP_ID = "23099204";
const API_KEY ="R3vzBnimh59KwIUkzA6XqN6M"
const SECRET_KEY = "saQGM9YLVG0hnmVeF84R0u9Up7n0RQ3B"

const client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const image =fs.readFileSync("timg.jpg").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })