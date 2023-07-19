// Task 3ii

db.credits.aggregate([
    // TODO: Write your query here
    {
            $match: {
                crew: {
                    $elemMatch: {
                        job: "Director",
                        id: 5655}
                }}
        },
                    { $unwind: { path: "$cast"} },
                    { $group: {
                                 _id: {id: "$cast.id", name: "$cast.name"},
                                 count: {$sum: 1} // Get the count for each group
                             }},
 {
                $project: {
                count :1,
                        id: "$_id.id", // explicitly project out this field
                        name: "$_id.name",
                        _id:0

                }},
     {$sort:{count:-1,id:1}},
          {$limit: 5},




]);