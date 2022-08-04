const { mongoose } = require('mongoose');
var Blog = require('../model/blogs');

//Fetching All Blog Data
exports.blogList = function(req, res){
    
    Blog.find().then( function(blog){
        res.status(200).json({
            response: blog
        })
    },function(err){
        return res.status(500).json({
            error: err
        });    
    });
    
    
};

exports.seacrhBlogs = function(req, res){
    Blog.find({title: req.body.title}).then( function(blog){
        res.status(200).json({
            response: blog
        })
    },function(err){
        return res.status(500).json({
            error: err
        });    
    });
    
}

//Creating New Blog Data
exports.createBlog = function(req, res){
  
    const blog = new Blog(Object.assign({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        image: req.body.image,
        contentType: req.body.contentType,
        content: req.body.content,
        createdBy: new Date(),      
    }));

    blog.save().then(function(blog){
        res.status(200).json({
            response: 'Blog Successfully Created', 
            id: blog._id
        })
    },
    function(err){
        return res.status(500).json({
            error: err  
        });    
    });   
};

exports.updateBlog = function(req, res){
    
    Blog.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(req.params.id)},
        {
            image: req.body.image,
            title: req.body.title,
            content: req.body.content,
            modifiedBy: new Date(),
        }, 
        function (err, result){
			
        if(err){
		    return log.system(err)
		}
		res.status(200).json({
			success: "Blog Successfully Updated",
		});
    })
};

exports.deleteBlog = function(req, res){
    Blog.findOneAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) }).then( function(){
        
        res.status(200).json({
            response: 'Blog Successfully Deleted'
        })
    },function(err){
        return res.status(500).json({
            error: err
        });    
    });
    
};
