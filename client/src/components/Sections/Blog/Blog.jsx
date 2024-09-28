import React, { useEffect, useState } from 'react';
import BlogList from './BlogList'; // Import the BlogList component
import axios from 'axios';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const apiUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/api/blogs`);
                const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedBlogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return <BlogList blogs={blogs} />;
};

export default BlogPage;
