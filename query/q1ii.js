// Task 1ii


db.movies_metadata.aggregate([
    // TODO: Write your query here

//{$match: {$or:[{genres: {$elemMatch: {name: "travetime l"}}},{keywords: {$elemMatch: {name: "presidential election"}}}]}},
{$match: {genres: {$elemMatch:  {name:"Comedy"}}}},
{$match: {vote_count: {$gte:  50 }}},
{$project: {_id:0,movieId:1,title:1,vote_average:1,vote_count:1   }},
{$sort: { vote_average:-1,vote_count:-1,movieId: 1}},
     {$limit: 50}

]);