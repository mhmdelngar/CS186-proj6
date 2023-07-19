// Task 2i

// Task 1ii


db.movies_metadata.aggregate([
    // TODO: Write your query here

//{$match: {$or:[{genres: {$elemMatch: {name: "travetime l"}}},{keywords: {$elemMatch: {name: "presidential election"}}}]}},
//{$match: {genres: {$elemMatch:  {name:"Comedy"}}}},
//{$match: {vote_count: {$gte:  50 }}},
{$project: {_id:0,title:1,vote_count:1 ,score: {$multiply: [ "$vote_average", "$vote_count" ] }, dom: {$add: [ 1838, "$vote_count" ] } }},
{$project: {_id:0,title:1,vote_count:1 ,score: {$add: [ "$score", {$multiply: [ 1838, 7 ] } ] }, dom: {$add: [ 1838, "$vote_count" ] } }},
{$project: {_id:0,title:1,vote_count:1 ,score: {$divide: [ "$score", "$dom" ] } }},
{$project: {_id:0,title:1,vote_count:1 ,score: {$round: [ "$score", 2 ] } }},
{$sort: { score: -1,vote_count:-1,title:-1}},
     {$limit: 20}

]);