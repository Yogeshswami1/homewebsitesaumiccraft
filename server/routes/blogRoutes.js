import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, uploadBlogImage } from '../controllers/blogController.js';

const router = express.Router();

router.post('/add', uploadBlogImage, createBlog); // Route to create a blog
router.get('/', getAllBlogs); // Route to fetch all blogs
router.delete('/:id', deleteBlog); // Route to delete a blog by ID

export default router;
