// Task 1iv


db.ratings.aggregate([
    // TODO: Write your query here
        {$match: {userId: 186}},
        {$sort: { timestamp:-1}},
        {$limit: 5},
              {$group:{_id:  "$userId" ,
                        movieIds: { $push:  "$movieId"  },
                        ratings: { $push:  "$rating"  },
                        timestamps: { $push:   "$timestamp"  }}},
{$project: {_id:0}},

]);