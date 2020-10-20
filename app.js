const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "sad da ds a d as adkasdkaldama ddadkadsk ad ksad kda dakdkaskdaskdkkfslk kdlsadks ksdfldfssdl  sdkkllk dsklf";
const aboutContent = "dkasdkad  dkasskssdk  dksadmkm kdskfsm skffskfmd fskfsdkmdf sdfksmf";
const Contact = "dasdakssd askldaslkdalk sldaklda sldksdl";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('mainPage');
});


app.listen(3000, () => {
    console.log("running server on port 3000");
});