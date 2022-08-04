const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
        _id: {
			name : '_id',
			type: mongoose.Types.ObjectId,
			required: true
		},  
        title: {
            name: 'Title',
			type: String,
			required: true
        },
		image: {
			name: 'Image',
			type: String,
			required: true
		},
        contentType: {
            name: 'ContentType',
			type: String,
			required: true
        },
        content: {
            name: 'Content',
            type: String,
            required: true        
        },
        createdBy: {
			name: 'CreatedBy',
			type: Date,
			required: false
		},
		modifiedBy: {
			name: 'ModifiedBy',
			type: Date,
			required: false
		}
});

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;