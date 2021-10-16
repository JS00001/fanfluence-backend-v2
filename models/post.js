const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const autopopulate = require('mongoose-autopopulate');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: {
            select: ['_id', 'username', 'profilePicture', 'verified']
        }
    },
    caption: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
}, {timestamps: true})

postSchema.plugin(autopopulate);
postSchema.plugin(timestamps);

module.exports = mongoose.model('Post', postSchema);