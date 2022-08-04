const express = require('express');
const BlogsController = require('../controller/blogs.controller');
const router = express.Router();


router.get('/', BlogsController.blogList);
router.get('/search', BlogsController.seacrhBlogs);
router.post('/create', BlogsController.createBlog);
router.put('/edit/:id', BlogsController.updateBlog);
router.delete('/delete/:id', BlogsController.deleteBlog);


module.exports = router;
