//jshint esversion:6

//token in github: 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

const express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const player =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
app.set('view engine', 'ejs');

app.use(BodyParser.urlencoded({extended: true}));
//app.use(express.ststic("public"));

mongoose.connect("mongodb+srv://drok012:Tbhdtui`12@minutegame.v4wejeh.mongodb.net/minuteBetDB");

const betsSchema1 = {
  name: String,
  minuteBet: String
};

const Bet = mongoose.model("Bet", betsSchema1);

const bet1 = new Bet({
  name: "",
  minuteBet: "200"
});

const startBet = [bet1];

app.get("/", function(req, res){

Bet.find({}, function(err, foundBets){

  if (foundBets.length === 0) {
    Bet.insertMany(startBet, function(err){
      if (err){
        console.log(err);
      } else {
        console.log("successfully saved");
      }
      res.redirect("/");
    });
  } else {
    res.render("minutes",{
      minute: foundBets,
      player0: player[0]
    });
  }

});

});

app.post("/", function(req, res) {

const newBet = req.body.Minute;
const newMinuteBet = req.body.MinuteBet;

switch (newBet) {
  case "אבי":
    player[0]++;
    break;
  case "בוכניק":
    player[1]++;
    break;
  case "חדרי":
    player[2]++;
    break;
  case "כפיר":
    player[3]++;
    break;
  case "מוטי":
    player[4]++;
    break;
  case "לרנר":
    player[5]++;
    break;
  case "עידן":
    player[6]++;
    break;
  case "פבל":
    player[7]++;
    break;
  case "קורמן":
    player[8]++;
    break;
  case "רון":
    player[9]++;
    break;
  case "שי":
    player[10]++;
    break;
  case "שרפהרץ":
    player[11]++;
    break;
  case "תמיר":
    player[12]++;
    break;
}

for (let i=0; i<13; i++){
  console.log(player[i]);
}
const bet = new Bet({
  name: newBet,
  minuteBet: newMinuteBet
});


bet.save();
res.redirect("/");

});

//app.post("/delete", function(req, res){
//  console.log(req.body.DeleteMinute);
//});

app.listen(5000, function(){
  console.log("server started on port 3000");
});
