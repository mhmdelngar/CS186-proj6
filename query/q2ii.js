// Task 2ii

db.movies_metadata.aggregate([
{$project: {"_id": 1, "tagline": 1,spl:{ $split: ["$tagline", " "] }}},
{ $unwind: { path: "$spl"} },
{$project: { tagline:0 }},
{$project: { spl:{ $trim: { input: "$spl",chars:",.!?" } } }},
{$project: { spl:{ $toLower:  "$spl"  } }},
{$project: {spl:1 ,len:{ $strLenCP: "$spl" }}},
{$match :  {len:{$gte:  4}}},
{$project: { "_id": "$spl"}},

{$project: { spl:0}},
{ $group: {
             _id: "$_id", // Group by the field movieId
             count: {$sum: 1} // Get the count for each group
         }},
{$sort:{count:-1}},
     {$limit: 20}


])

