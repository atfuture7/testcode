// Create a mirror directory in nodejs folder. 
// I need to verify if the path works in reactjs, 
// since I installed reactjs and mongodb in differet directories
var dataRep = require('../../data/dataRepNode');

data = new dataRep(); 		//module class defined a little different from reactjs 
console.log(data.mongoApi);	//folder path asserted
var url="";
console.log(process.cwd());
process.chdir(data.mongoApi);
console.log(process.cwd());	//api path asserted

const MongoClient = require(data.mongoApi + 'mongodb').MongoClient;
const client = new MongoClient(url, {useUnifiedTopology: true});

// 20200321 start my research on MongoDB. 
// I'm using remote MongoDB service at https://account.mongodb.com/account/login
// Since I'm not going to expose my file system or administrator information, 
// I use include file to contain confidential information. 
// important reference:
// http://mongodb.github.io/node-mongodb-native/3.5/api/index.html
// https://docs.mongodb.com/manual/reference/method/

