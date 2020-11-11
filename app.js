const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");




const app = express();

let items = ["Buy Some Food", "Cook Some Food", "Eat Some Food"];
let workItems =["Boots","Hat","ladder"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    
let day = date.getDate();


res.render("list", {
     listTitle:day, 
     newListItems:items
    });

});

    app.post("/", function(req, res){
        console.log(req.body);
        let item = req.body.newItem;

        if (req.body.list === "Work"){
            workItems.push(item);
            res.redirect("/work");
        }else{
            items.push(item);
            res.redirect("/");
        }

    });


    app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});

    });
   app.get("/about", function(req,res){
    res.render("about");
   });




app.listen(process.env.PORT || 3000, function(){
console.log("Port is listening on 3000")
});