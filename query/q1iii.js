// Task 1iii

db.ratings.aggregate([
    // TODO: Write your query here
        // Match documents with certain timestamps
//        {$match: {timestamp: { $gte:  838857600, $lt: 849398400}}},
        // Perform an aggregation
        {
            $group: {
                _id: "$rating", // Group by the field movieId
                count: {$sum: 1} // Get the count for each group
            }
         },
          {
                 $project: {
               rating:"$_id", // grab the title of first movie
                         _id: 0,
                         count:1// explicitly project out this field

                 }
              },
              {$sort: { rating:-1}},

]);