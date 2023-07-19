// Task 3i

db.credits.aggregate([
    // TODO: Write your query here
    {$match: {cast: {$elemMatch:  {id:7624}}}},
    { $project: {_id: 0,crew:0 }},
        { $unwind: { path: "$cast"} },
        {
                $project: {
                        _id: "$cast.id", // explicitly project out this field
                        character: "$cast.character",
                        movieId: 1,
                }},
            {$match: {_id:7624}},
             {
                     $lookup: {
                         from: "movies_metadata", // Search inside movies_metadata
                         localField: "movieId", // match our _id
                         foreignField: "movieId", // with the "movieId" in movies_metadata
                         as: "movies" // Put matching rows into the field "movies"
                     }
                 },

{
        $project: {
                _id: 0, // expliAcitly project out this field
                title: {$first: "$movies.title"}, // grab the title of first movie
                release_date: {$first: "$movies.release_date"}, // rename count to num_ratings
                character: 1,
        }
     },
     {$sort:{release_date:-1}},



]);