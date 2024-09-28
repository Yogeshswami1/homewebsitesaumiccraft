// import multer from 'multer';
// import multerS3 from 'multer-s3';
// import s3 from '../config/s3Config.js';
// import Blog from '../models/blogModel.js';

// // Set up multer to store files in S3
// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.S3_BUCKET_NAME,
//         metadata: (req, file, cb) => {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: (req, file, cb) => {
//             cb(null, Date.now().toString() + '-' + file.originalname);
//         }
//     })
// });

// // Create a new blog post
// export const createBlog = async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         const media = req.file ? req.file.location : null;

//         const blog = new Blog({
//             title,
//             content,
//             media
//         });

//         const savedBlog = await blog.save();
//         res.status(201).json(savedBlog);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete a blog post
// export const deleteBlog = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Blog.findByIdAndDelete(id);
//         res.status(200).json({ message: "Blog deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Get all blogs
// export const getAllBlogs = async (req, res) => {
//     try {
//         const blogs = await Blog.find({});
//         res.status(200).json(blogs);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const uploadBlogImage = upload.single('media'); // Middleware for handling media upload


import multer from 'multer';
import multerS3 from 'multer-s3';
import s3 from '../config/s3Config.js';
import Blog from '../models/blogModel.js';
import { v4 as uuidv4 } from 'uuid';  // For unique filenames


// Set up multer to store files in S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        metadata: (req, file, cb) => {
            console.log(`[INFO] - Generating metadata for file: ${file.originalname}`);
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const uniqueFileName = `${uuidv4()}-${Date.now().toString()}-${file.originalname}`;
            console.log(`[INFO] - Generated unique file name: ${uniqueFileName}`);
            cb(null, uniqueFileName);
        }
    })
});

// Middleware for handling media upload
export const uploadBlogImage = upload.single('media');

// Create a new blog post
export const createBlog = async (req, res) => {
    console.log('[INFO] - Received request to create a new blog post');
    try {
        const { title, content } = req.body;
        const media = req.file ? req.file.location : null;

        // Log the file upload details
        if (req.file) {
            console.log(`[INFO] - File uploaded successfully to S3 at location: ${req.file.location}`);
        } else {
            console.log('[INFO] - No file uploaded');
        }

        // Validate input data
        if (!title || !content) {
            console.log('[ERROR] - Missing required fields: title or content');
            return res.status(400).json({ message: 'Title and content are required' });
        }
        console.log(`[INFO] - Title: ${title}, Content length: ${content.length}`);

        // Create new blog entry
        const blog = new Blog({
            title,
            content,
            media
        });

        const savedBlog = await blog.save();
        console.log(`[INFO] - Blog post created successfully with ID: ${savedBlog._id}`);

        res.status(201).json(savedBlog);
    } catch (error) {
        console.error(`[ERROR] - Error while creating blog post: ${error.message}`);
        res.status(400).json({ message: error.message });
    }
};

// Delete a blog post
export const deleteBlog = async (req, res) => {
    console.log(`[INFO] - Received request to delete blog with ID: ${req.params.id}`);
    try {
        const { id } = req.params;
        await Blog.findByIdAndDelete(id);
        console.log(`[INFO] - Blog post with ID: ${id} deleted successfully`);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.error(`[ERROR] - Error while deleting blog post: ${error.message}`);
        res.status(400).json({ message: error.message });
    }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
    console.log('[INFO] - Received request to fetch all blogs');
    try {
        const blogs = await Blog.find({});
        console.log(`[INFO] - Found ${blogs.length} blog(s)`);
        res.status(200).json(blogs);
    } catch (error) {
        console.error(`[ERROR] - Error while fetching blogs: ${error.message}`);
        res.status(400).json({ message: error.message });
    }
};
