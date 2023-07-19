// Task 1i

db.keywords.aggregate([
    // TODO: Write your query here

{$match: {$or:[{keywords: {$elemMatch: {name: "time travel"}}},{keywords: {$elemMatch: {name: "presidential election"}}}]}},
//{$match: {keywords: {$elemMatch:  {name:"mickey mouse"}}}},

{$project: {_id:0,movieId:1   }},
{$sort: { movieId: 1}}

]);