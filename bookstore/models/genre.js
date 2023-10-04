var mongoose = require ('mongoose');

// Genre schema
var genreSchema = mongoose.Schema ({
        name: {
            type: String,
            required: true
        },
        createDate: {
            type: Date,
            default: Date.now
        }
});

var Genre = module.exports = mongoose.model ('Genre', genreSchema);

// Get genreSchema
module.exports.getGenres = function (callback, limit) {
    console.log ("hello");
    Genre.find (callback).limit (limit);
};
