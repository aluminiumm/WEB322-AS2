const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

//imported module 
const fakeDB  = require("./model/FakeDB.js");

const app = express();
require('dotenv').config({ path: 'config/keys.env' });

app.post("/formRegistration",(req,res)=>{
    sgMail.setApiKey(process.env.SEND_GRID_KEY)
    const msg = {
      to: 'au.udfam@gmail.com', // Change to your recipient
      from: 'ayumi.reg@gmail.com', // Change to your verified sender
      subject: 'Welcome to VUDU',
      text: 'Welcome to VUDU',
      html: '<div style="text-align:center; font-family:Roboto, sans-serif;"><h1 style="background:#000066; color:white; padding:20px;">Welcome to VUDU</h1><a href="/registWelcome"><button style="color:white; font-size:110%; background:#0099FF; padding:13px; border:0; border-radius:5px; cursor:pointer;">Click here to reveal 50% OFF coupon</button></a><p>*Valid from March 15 - March 29, 2021</p><p>&copy; 2021 Fandango</p></div>',
    }
    sgMail
      .send(msg)
      .then(() => {
        //console.log('Email sent')
        res.redirect("/registThanks");
      })
      .catch((error) => {
        console.error(error)
      })
})


//Set Handlebars as the Express enginge for the app
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//load static resources
app.use(express.static("public"));

//This tells express to make from data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: false }))


//routes
//route for home page 
app.get("/index",(req,res)=>{

    //load index.handlebars
    res.render("index",{
        title : "VUDU",
        //services : "We Sell a number of different movies"
        movies : fakeDB.getAllMovies()
    });
})

//route for movie listing page 
app.get("/movies",(req,res)=>{

    //load movieListing.handlebars
    res.render("movieListing",{
        title: "Movies & TV Shows",
        movies : fakeDB.getAllMovies()
    });
})

app.get("/movies/:id",(req,res)=>{

    //load movieDetail.handlebars
    res.render("movieDetail",{
        title: "Movie Detail",
        movie : fakeDB.getAMovie(req.params.id)
    })
})

//route for registration page 
app.get("/registration",(req,res)=>{

    //load registration.handlebars
    res.render("registration",{
        title: "Customer Registration"
    });
})

//route for registration thanks page 
app.get("/registThanks",(req,res)=>{

    //load registThanks.handlebars
    res.render("registThanks",{
        title: "Thank You for Registration !!"
    });
})

//route for registration welcome page 
app.get("/registWelcome",(req,res)=>{

    //load registWelcome.handlebars
    res.render("registWelcome",{
        title: "Welcome to VUDU",
        movies : fakeDB.getAllMovies()
    });
})

//route for login page 
app.get("/login",(req,res)=>{

    //load login.handlebars
    res.render("login",{
        title: "Login"
    });
})

//Handle the submitted data from the login form
app.post("/formLogin",(req,res)=>{
    const errors = [];

    if(req.body.email=="")
    {
        errors.push("You must enter an email");
    }
    if(req.body.password=="")
    {
        errors.push("You must enter a password");
    }
    //This is if the user failed the validation
    if(errors.length > 0)
    {
        res.render("login",{
            title:"Login",
            errorMessages:errors
        });
    }
    //There are no errors
    else
    {
        res.redirect("/index");
    }
});

//Handle the submitted data from the registration form
app.post("/formRegistration",(req,res)=>{
    const errors = [];

    if(req.body.firstname=="")
    {
        errors.push("You must enter a first name");
    }
    if(req.body.lastname=="")
    {
        errors.push("You must enter a last name");
    }
    if(req.body.email=="")
    {
        errors.push("You must enter an email");
    }
    if(req.body.password=="")
    {
        errors.push("You must enter a password");
    }
    //This is if the user failed the validation
    if(errors.length > 0)
    {
        res.render("registration",{
            title:"Customer Registration",
            errorMessages:errors
        });
    }
    //There are no errors
    else
    {
        res.redirect("/index");
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>
{
        console.log(`Web application is up and running!!!`);
});