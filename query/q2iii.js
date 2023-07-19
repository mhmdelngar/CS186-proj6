// Task 2iii
db.movies_metadata.aggregate([
{$project: { budget:{$cond:{ if : { $ne: [ "$budget", false ]  }   ,
then: "$budget",
else:null }} }},
{$project: { budget:{$cond:{ if : { $ne: [ "$budget", '' ]  }   ,
then: "$budget",
else:null }} }},
{$project: { budget:{$cond:{ if : { $isNumber : "$budget" }   ,
then: "$budget",
else:{
$trim: { input: "$budget",chars:"USD $" }} }} }},
{$project: { budget:{ $convert: { input: "$budget", to: "int" } } }},
{$project: { budget:{ $round: [ "$budget", -7 ] } }},

{$project: { budget:{$cond:{ if : { $ne: [ "$budget", null ]  }   ,
then: "$budget",
else:"unknown" }} }},
{ $group: {
             _id: "$budget",
             count: {$sum: 1} // Get the count for each group
         }},
{$project: { budget:"$_id",count:1,_id:0}},
{$sort:{budget:1}},

])

