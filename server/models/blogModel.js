import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    media: {
        type: String, // URL of the uploaded image or video
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
