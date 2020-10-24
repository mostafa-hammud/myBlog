const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loDash = require("lodash");

let posts = [];

const homeStartingContent = "sad da ds a d as adkasdkaldama ddadkadsk ad ksad kda dakdkaskdaskdkkfslk kdlsadks ksdfldfssdl  sdkkllk dsklf";
const aboutContent = "dkasdkad  dkasskssdk  dksadmkm kdskfsm skffskfmd fskfsdkmdf sdfksmf";
const Contact = "dasdakssd askldaslkdalk sldaklda sldksdl";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('mainPage', {data: homeStartingContent,posts:posts});    
});

app.get("/about", (req,res) => {
    res.render('aboutMe', {data : aboutContent});
})

app.get("/contact", (req,res) =>{
    res.render('contactMe', {data: Contact});
});
app.get("/write", (req,res) =>{
    res.render('write');
})

app.post("/write", (req,res) =>{
    const post = {
        title : req.body.newTitle,
        message : req.body.newMessage
    };
    posts.push(post);
    res.redirect("/")
})

app.get("/posts/:postName",(req,res) =>{
    const postTitle = req.params.postName;
    posts.forEach((i) => {
        if (loDash.lowerCase(i.title) === loDash.lowerCase(postTitle)){
            console.log("found");
            res.render('post', {post: i});
        }
    });
    
})

app.post("/post", (req,res) => {
    res.redirect("/posts/:postName");
})

app.listen(3000, () => {
    console.log("running server on port 3000");
});
