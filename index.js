let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"milestone3db.ch68o6g42eax.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "milestone3",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  console.log(result);
  res.send(result);
 }); 
});
app.listen(3000);
