import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/getAllBlogs');
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        if (blogs) {
            setBlogData(blogs.data);
        }
    }, [blogs]);

    const handleDelete = async (blogId) => {
        console.log(blogId, 'blog');
        try {
            const response = await fetch(`http://localhost:3000/deleteBlog/${blogId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Delete was successful');
                const updatedBlogs = blogData.filter((blog) => blog._id !== blogId);
                setBlogData(updatedBlogs);
            } else {
                console.log('Delete failed');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogData && <BlogList blogs={blogData} title="All Blogs!" handleDelete={handleDelete} />}
        </div>
    );
};

export default Home;
