// const app=require('./mod')

// const { json } = require("express/lib/response")

// console.log('This example is different!');
// console.log('The result is displayed in the Command Line Interface');
// var a=30;
// let b=20;
// const z=10;
// // z=10
// console.log(a+b+z);
// const arr1=[2,3,4,5,6];
// console.log(arr1);
// console.log(app.z());
// console.log(app);


// const arr2=[2,3,4,5,6,5,5,6];
// let result=arr2.filter((item)=>{
//     return item===5
// })
// console.log(result);

// let result1=arr2.filter((item)=>{
//     return item>=4
// })
// console.log(result1);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var http = require('http')
// http.createServer(function(req,res){
//     res.write("Welcom");
//     res.end()
// }).listen(8080)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var http = require('http')
// const dataControl=(req,resp)=>{
//     resp.write("<h1> Hello Good morning");
//     resp.end();
// }
// http.createServer(dataControl).listen(9800)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const fs=require('fs');
// fs.writeFileSync("hello.txt","code step by step")

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//middleware ->for all routes

// const express=require('express');
// const reqfilter=require('./middleware')
// const app=express();

// app.use(reqfilter);

// app.get('/',(req,res)=>{
//     console.log(req.query.age);
//     res.send("Hello , this is home page " +req.query.age)
// });

// app.get('/about',reqfilter,(req,res)=>{         //on single routes
//     res.send("Hello , this is about page")
// });
// app.listen(8000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Different way to apply middleware to routes

// const express=require('express');
// const reqfilter=require('./middleware')
// const app=express();
// const route=express.Router();

// route.use(reqfilter);


// app.get('/',(req,res)=>{
//     console.log(req.query.age);
//     res.send("Hello , this is home page ")
// });

// app.get('/home',(req,res)=>{
//     console.log(req.query.age);
//     res.send("Hello , this is home page2")
// });

// route.get('/about',(req,res)=>{
//     console.log(req.query.age);
//     res.send("Hello , this is home page " +req.query.age)
// });

// route.get('/contact',(req,res)=>{
//     console.log(req.query.age);
//     res.send("Hello , this is home page " +req.query.age)
// });
// app.use('/',route);

// app.listen(8000);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// middleware =>Middleware in Node.js is a function that acts as an intermediary between software layers, processing requests and responses
//Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function
// const fs=require('fs');
// const express=require('express');
// const app=express();

// app.use((req,res,next)=>{
//     console.log("Hi im middleware 1");
//     req.myUserName='fafa.com';
//     // return res.json({mgs:"Hello middleware"})
//     // return res.end()
//     next();
    
// })
// app.use((req,res,next)=>{
//     console.log("Hi im middleware 2",req.myUserName);
//     // return res.end()
//     next();
// })

// app.use((req,res,next)=>{
//    fs.appendFile('log.txt',`\n${Date.now()}:${req.ip}:${req.method}:${req.path}`,(err,data)=>{
//     next();
//    })
// })

// app.get('/users',(req,res)=>{
//   res.send(`hi this is expressss ${req.myUserName}`)
// });

// app.listen(8000)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//req.query,req.params

// const express = require('express');
// const app = express();

// //req.query
// http://localhost:8080/users?limit=10&page=1&name=abc
// app.get('/users',(req,res)=>{
//     const {limit,page,name}=req.query;
//     res.json({limit,page,name});
// })

// //req.params
// //http://localhost:8080/users/123
// app.get('/users/:id',(req,res)=>{
//     const {id}=req.params;
//     res.json({id});
// })
// app.listen(8080, ()=>{
//     console.log('Server is running on Port:8080');
// })
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// req.query,req.params

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.get('/users',(req,res)=>{
//     const query = req.query;
//     console.log(query.page, query.limit);
//     res.status(200).json(query);
// });

// app.get('/users/:id', (req, res)=>{
//     const params = req.params;
//     console.log(params);
//     res.json(params);
// })

// app.post('/users',(req,res)=>{
//     const body = req.body;
//     console.log(body);
//     res.json(body);
// });

// app.listen(8080, ()=>{
//     console.log('Server is running on Port:8080');
// })
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//sending data to browser
// const path = require('path');
// const express = require('express');
// const app = express();


// app.get('',(req,res)=>{
//     res.send(`<h1>Welcome to home page</h1> <a href="/about"> Go to about page`)
// })

// app.get("/about",(req,res)=>{
//     res.send(`<input type ="text" name="name" value="${req.query.name}")> <button> Click me </button><br><a href="/"> Go to Home page`)
// })

// app.get("/getdate",(req,res)=>{
//     res.send(`<input type ="text" name="name" value="${req.query.name}")> <button> Click me </button><br><a href="/"> Go to Home page`)
// })

// app.get("/data",(req,res)=>{
//   console.log(req.query.name);
//     res.send([
//         {   
//             name:'sap',
//             email:'sap@gmail.com'
//         },
//         {
//             name:'admin',
//             email:'admin@gmail.com'
//         }
//     ])
// })

// app.listen(8080, ()=>{
//     console.log('Server is running on Port:8080');
// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Make HTML page
// const path = require('path');
// const express = require('express');
// const app = express();

// const publicpath=path.join(__dirname,'public')  //make path
// console.log(__dirname);
// console.log(publicpath)

// app.use(express.static(publicpath));             //app.use is express function,static load html content)page)

// app.listen(8080)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Remove extension from URL

// const path = require('path');
// const express = require('express');
// const app = express();

// const publicpath=path.join(__dirname,'public')  //make path
// console.log(publicpath)

// app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`)
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(`${publicpath}/contact.html`)
// })

// app.get('*',(req,res)=>{                    //handle 404 page
//     res.sendFile(`${publicpath}/nopage.html`)
// })

// app.listen(8080)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Mongo Connect

// const dbConnect= require('./mongocon');

// // InsertOne
// dbConnect().then((resp)=>{
//   resp.insertOne({username:'bob',email:'admin@gmail.com'})
// })

// //InsertMany
// dbConnect().then((resp)=>{
//   resp.insertMany([
//     {username:'bob',email:'admin@gmail.com'},
//     {username:'pop',email:'pop@gmail.com'},
//     {username:'top',email:'top@gmail.com'}
//   ])
// })

// //find
// dbConnect().then((resp)=>{
//   resp.find({username:'bob'}).toArray().then((data)=>{
//     console.log(data)
//   })
// })

// //UpdateOne
// dbConnect().then((resp)=>{
//   resp.updateOne({username:'bob'},{$set:{email:'bob@gmail.com'}});
// })

// //UpdateMany
// dbConnect().then((resp)=>{
//   resp.updateMany({username:'bob'},{$set:{email:'bob@gmail.com'}});
// })

// //deleteOne
// dbConnect().then((resp)=>{
//   let result=resp.deleteOne({username:'top'});
//   console.log(result);
// })

//deleteMany
// dbConnect().then((resp)=>{
//   resp.deleteMany({username:'bob'}).then((result)=>{
//     console.log(result);
//   })  
// })
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GET API 
// const express =require('express');
// const dbConnect= require('./mongocon');
// const app = express();

// app.use(express.json());

// app.get('/',(req,resp)=>{
//   resp.send({name:'sap123'})
// });

// app.get('/user',async(req,resp)=>{
//   let data =await dbConnect();
//   data= await data.find().toArray();             //toArray  convert to structure form
//   resp.send(data);
// })

// // post data test on postman
// app.post('/postdata',async(req,resp)=>{
//     let data =await dbConnect();
//     data= await data.insertOne(req.body)  
//   console.log(req.body)
//   resp.send(req.body)
// })

// // update into db through postman
// app.put('/postdata/:name',async(req,resp)=>{
//   let data = await dbConnect();
//   let result = data.updateOne(
//     {name:req.params.name},
//     {$set:req.body}
//   )
//   resp.send({result:"update"}) 
// })

// app.listen(8000);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// EJS Template Engine

// const express=require('express');
// const app=express();

// app.set('view engine','ejs');
// app.use( express.static( "views" ) );


// //calling HTML template
// app.get('/profile',(req,resp)=>{
//     resp.render('profile');
// })

// //send data to browser
// app.get('/getdata',(req,resp)=>{      //Routing data 
//    const user={
//     name:'sap data',
//     email:"sap@gmail.com",
//     city:'mumbai',
//     skill:['php','c++','js','java']
//    }
//    resp.render('getdata',{user})        //sending data in object
// })

// app.get('/login',(req,resp)=>{
//     resp.render('login');
// })

// app.listen(8080);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Upload File

// const express=require('express');
// const multer = require('multer');
// const app=express();

// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+"-" + Date.now()+".jpg")
//         }
//     })
// }).single("user_file");

// app.post('/upload',upload,(req,res)=>{
//     res.send('file upload');
// });

// app.listen(8000)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Mongoose:mongoose is npm package with which connect to nodejs. mongoose give advance feature the mongodb

// const mongoose=require('mongoose');

// const main =async()=>{
//     await mongoose.connect("mongodb://localhost:27017/tails")
//     const productSchema=new mongoose.Schema({
//         name:String
//     });
//     const productModel= mongoose.model('users',productSchema)
//     let data=new productModel({name:"m8",price:1000});
//     let result =await data.save();
//     console.log(result)
// }
// main();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var http = require('http');
// var fs = require('fs');
// const express=require('express');
// const app=express();

// async function getData() {
//     const url = 'http://localhost:8800/location';
//     const response = await fetch(url);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
// }   
// getData();

// app.get('/location',(req,res)=>{
//     fs.readFile('json/location.json','utf-8',function(err, data){
//         if(err) throw err;
//         res.write(data);
//         res.end()
//     })
// });

// app.listen(8800,() => {
//     console.log("Running on port 8800")
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// create json dump data into json

// // Step 1: Read the existing JSON file
// let data = fs.readFileSync('location.json');
// let json = JSON.parse(data);

// // Step 2: Append new data
// let newData = { "country": "England" };
// json.push(newData); // Ensure your JSON file contains an array

// // Step 3: Write the updated data back to the file
// fs.writeFileSync('location.json', JSON.stringify(json), (err) => {
//     if (err) throw err;
//     console.log('Data appended successfully');
// });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function test() {
//     console.log("2 line");
//     const response= await fetch('https://jsonplaceholder.typicode.com/todos/1'); //fetch method send json or text data
//     console.log("3 line");
//     const students=await response.json();
//     console.log(students);
//   }
//   console.log("1 line");
//   let a= test();
//   console.log("4 line");
//   console.log(a);



//   async function test() {
//     return "Hello";
//   }
//   test().then((result)=>{
//     console.log(result);
//   }).catch((e)=>{
// console.log("handle error"+e);
//   })




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const fs = require("fs"); 

// Read users.json file 
// fs.readFile("json/users.json", function(err, data) { 
    
//     // Check for errors 
//     if (err) throw err; 

//     // Converting to JSON 
//     const users = JSON.parse(data); 
//     console.log(users); // Print users 
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // STEP 1: Reading JSON file 
// const users = require("./users");

// // Defining new user 
// let user =
// {
//     name: "New User123",
//     age: 50,
//     language: ["PHP", "Go", "JavaScript"]
// };

// // STEP 2: Adding new data to users object 
// users.push(user);

// // STEP 3: Writing to a file 
// fs.writeFile(
//     "users.json",
//     JSON.stringify(users),
//     err => {
//         // Checking for errors 
//         if (err) throw err;

//         // Success 
//         console.log("Done writing");
//     }); 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/
// https://www.geeksforgeeks.org/how-to-get-data-from-mongodb-using-node-js/
// The default behavior of EJS is that it looks into the ‘views’ folder for the templates to render. So, let’s make a ‘views’ folder in our main node project folder and make a file named “home.ejs” which is to be served on some desired requests in our node project. The content of this page is: 

// const {MongoClient} = require('mongodb')    //import module mongodb, Create a new MongoClient instance
// const url= 'mongodb://localhost:27017';   //path for connections
// const databaseName='aptech'             //database name
// const client= new MongoClient(url);   //MongoClient class is a class that allows for making Connections to MongoDB

// const express =require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine','ejs');
// app.set('views', './views');

// app.get('/add',(_,res)=>{
//     res.render('form');
// })

// app.post('/formdata',async(req,res)=>{        
//       var body = {
//         _id: Math.floor(Math.random() * 10000),
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         mobile: req.body.mobile,
//         password: req.body.password,
//         gender: req.body.gender,
//       };
//       console.log(body)
//     let data =await dbConnect();
//     data=db.collection('users').insertOne(body)  
//     res.send("insert ok");
// })

// app.get('/user',async(req,resp)=>{
//   let data =await dbConnect();
//   data=db.collection('users');
//   data= await data.find().toArray();             //toArray  convert to structure form
//   resp.send(data);
// })

// // post data test on postman
// app.post('/postdata',async(req,resp)=>{
//     let data =await dbConnect();
//     data=db.collection('users');
//     data= await data.insertOne(req.body)  
//   console.log(req.body)
//   resp.send(req.body)
// })

// // update into db through postman
// app.put('/postdata/:name',async(req,resp)=>{
//   let data = await dbConnect();
//   data=db.collection('users');
//   let result = data.updateOne({name:req.params.name},{$set:req.body})
//   resp.send({result:"update"}) 
// })

// async function dbConnect()
// {
//     let result = await client.connect();    //return promise 
//     db= result.db(databaseName);          //connect with database
//     return db       //connect with user
// }

// app.listen(8000);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Restaurants API

// const {MongoClient} = require('mongodb')    //import module mongodb, Create a new MongoClient instance
// const url= 'mongodb://localhost:27017';   //path for connections
// const databaseName='aptechhotel'             //database name
// const client= new MongoClient(url);   //MongoClient class is a class that allows for making Connections to MongoDB

// const express =require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// //List of all city
// app.get('/location',async(req,resp)=>{
//   let data =await dbConnect();
//   data=db.collection('location');
//   data= await data.find().toArray();             //toArray  convert to structure form
//   resp.send(data);
// })

// //List all restaurants
// app.get('/restaurants',async(req,resp)=>{
//   let data =await dbConnect();
//   data=db.collection('restaurantsData');
//   data= await data.find().toArray();             //toArray  convert to structure form
//   resp.send(data);
// })


// //search restaurants base on state_id
// //http://localhost:8000/searchrest?stateId=1
// app.get('/searchrest',async(req,resp)=>{
//   var query = {};
//   if (req.query.stateId) {
//     query = { state_id: Number(req.query.stateId) };
//     console.log(query);
//   }
//   let data =await dbConnect();
//   data=db.collection('restaurantsData');
//   data= await data.find(query).toArray();             //toArray  convert to structure form
//   resp.send(data);
// })

// async function dbConnect()
// {
//     let result = await client.connect();    //return promise 
//     db= result.db(databaseName);          //connect with database
//     return db       //connect with user
// }

// app.listen(8000);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const express = require("express");
// const app = express();
// const EventEmitter = require('events');
// const event= new EventEmitter();

// let count =0
// event.on("countAPI",()=>{           //handle Events 1.events name ,callbackfunction
//     count++
//     console.log("Event called",count)
// })

// let count1 =0
// event.on("countdata",()=>{           //handle Events 1.events name ,callbackfunction
//     count1++
//     console.log("Event data",count1)
// })

// app.get("/",(req,res)=>{
// res.send("api called")
// event.emit("countAPI")           //genearte signal/Event generate
// })

// app.get("/data",(req,res)=>{
//     res.send("api called")
//     event.emit("countdata")           //genearte signal/Event generate
//     })

// app.listen(9800);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const nodemailer = require("nodemailer");
// // Import NodeMailer (after npm install)

// async function main() {
// // Async function enables allows handling of promises with await

//   // First, define send settings by creating a new transporter: 
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
//     port: 465, // Port for SMTP (usually 465)
//     secure: true, // Usually true if connecting to port 465
//     auth: {
//       user: "shejalesapna21@gmail.com", // Your email address
//       pass: "sapnaaarush@21", // Password (for gmail, your app password)
//       // ⚠️ For better security, use environment variables set on the server for these values when deploying
//     },
//   });
  
//   // Define and send message inside transporter.sendEmail() and await info about send from promise:
//   let info = await transporter.sendMail({
//     from: 'shejalesapna21@gmail.com',
//     to: "shejalesapna21@gmail.com",
//     subject: "Testing, testing, 123",
//     html: `
//     <h1>Hello there</h1>
//     <p>Isn't NodeMailer useful?</p>
//     `,
//   });

//   console.log(info.messageId); // Random ID generated after successful send (optional)
// }

// main()
// .catch(err => console.log(err));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const express = require("express");
// const app = express();
// let PORT = 5000;

// const sendMail = require("./controller/sendMail");

// app.get("/", (req, res) => {
//   res.send("I am a server");
// });

// app.get("/mail", sendMail);

// const start = async () => {
//   try {
//     app.listen(PORT, () => {
//       console.log(`I am live in port no.  ${PORT}`);
//     });
//   } catch (error) {}
// };

// start();


// async function test() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const students = await response.json();
//     return students;
//   }
//   test()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. This is crucial for security and resource sharing in web applications.
// By using the express.json middleware, you can handle POST, PUT, or PATCH requests that send JSON data from the client to the server.
// The express.urlencoded function is used to parse URL-encoded data and populate the req.body object with key-value pairs. This is especially useful when dealing with HTTP POST requests where the content type is application/x-www-form-urlencoded.

const dbConnect=require('./connection')
const express = require("express");
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


  app.post('/reactform',async(req,resp)=>{
    let data =await dbConnect();
    data=db.collection('formdata')   
    console.log(req.body);
    data= await data.insertOne(req.body)            //toArray  convert to structure form
    resp.send(data); 
  })

  app.get("/userdata", async(req, res) => {
    let data =await dbConnect();
    data=db.collection('formdata')
    data= await data.find().toArray();
    res.send(data); 
  });

  app.get("/getdata/:id", async(req, res) => {
    var id = Number(req.params.id)
    let data =await dbConnect();
    data=db.collection('formdata')
    data= await data.find({_id: id}).toArray();
    res.send(data); 
  });

 app.put("/updatedata/:id", async(req, res) => {
    var id = Number(req.params.id)
    let data =await dbConnect();
    data=db.collection('formdata')
    data= await data.updateOne({_id: id}, {$set:req.body})
    console.log(req.body);
    console.log(data);
    res.send({result:"update"}) 
  });


  //http://localhost:8000/delRecord/59
  app.delete("/delRecord/:id", async(req, res) => {
    var id = Number(req.params.id)
    console.log(id);
    let data =await dbConnect();
    data=db.collection('formdata')
    data= await data.deleteOne({_id:id})
    res.send(data); 
  });

  app.post('/login',async(req,resp)=>{
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
    let data =await dbConnect();
    data=db.collection('formdata')   
    console.log(req.body);
    data= await data.find({$and:[{email:email},{password:password}]}).toArray();            //toArray  convert to structure form
    resp.send(data);
  })


//List All cities
app.get("/location", async(req, res) => {
    let data =await dbConnect();
    data=db.collection('locations')
    data= await data.find().toArray();
    res.send(data); 
  });

 //List all restaurants
  app.get("/restaurants", async(req, res) => {
    let data =await dbConnect();
    data=db.collection('RestaurantsData')
    data= await data.find().toArray();
    res.send(data); 
  });
  
//params Example -compulsory to pass params to work.
  app.get("/restaurant/:cityId", async(req, res) => {
    var cityId = Number(req.params.cityId)
    console.log(cityId);
    let data =await dbConnect();
    data=db.collection('RestaurantsData')
    data= await data.find({state_id:cityId}).toArray();
    res.send(data); 
  });

//http://localhost:8000/restaurant?cityId=2
app.get("/restaurant", async(req, res) => {
    var cityId = Number(req.query.cityId)
    console.log(cityId);
    let data =await dbConnect();
    data=db.collection('RestaurantsData')
    data= await data.find({state_id:cityId}).toArray();
    res.send(data); 
  });

//http://localhost:8000/quicksearch
  app.get("/quicksearch", async(req, res) => {
    let data =await dbConnect();
    data=db.collection('Mealtype')
    data= await data.find().toArray();
    res.send(data); 
  });

//http://localhost:8000/restmenu?mealType=1
app.get("/restmenu", async(req, res) => {
  var cityId = Number(req.query.mealType)
  console.log(cityId);
  console.log(req.query.mealType);
  if (req.query.mealType) {
    query = { "mealTypes.mealtype_id": Number(req.query.mealType) };
    console.log(query);
  }
  let data =await dbConnect();
  data=db.collection('RestaurantsData')
  data= await data.find(query).toArray();
  res.send(data); 
});

app.get("/restall/:id", async(req, res) => {
  var restid = Number(req.params.id)
  console.log(restid);
  let data =await dbConnect();
  data=db.collection('RestaurantsData')
  data= await data.find({restaurant_id:restid}).toArray();
  res.send(data);
});
app.listen(8000);



