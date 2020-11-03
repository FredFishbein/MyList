const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){

var today = new Date();

var options = {
    weekday: "short",
    day: "numeric",
    month: "long",
};


var day = today.toLocaleDateString("en-US", options);
// Up to this point we create the date and time


    res.render("list", {KindOfDay: day, newListItems: items});

});

    app.post("/", function(req, res){
         item = req.body.newItem;

        items.push(item);

        res.redirect("/");
    });








app.listen(process.env.PORT || 3000, function(){
console.log("Port is listening on 3000")
});